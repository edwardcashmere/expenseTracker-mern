const Transactions = require('../models/transactions.js')
//@desc   get transactiona
//route   GET /api/v1/transactions
//acces   public
exports.getTransactions = async (req,res,next)=>{
    try {
        const transactions = await Transactions.find();
        res.status(200).json({
            success: true,
            length: transactions.length,
            data: transactions
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
        
    }

}
//@desc   add transactiona
//route   POST  /api/v1/transactions
//acces   public
exports.addTransactions =async (req,res,next)=>{

    try {
        const { text, amount } =req.body;
        const transaction =await new Transactions({text,amount})
        await transaction.save()
        res.status(201).json({
            success: true,
            data: transaction
        })
    } catch (error) {
        if(error.name === 'ValidationError'){
            const err= Object.values(error.errors).map(val => val.message)
            res.status(400).json({
                success: false,
                error:`post route to add transaction failed ${err}`
            })

        }else{
        res.status(500).json({
            success: false,
            error:`post route failure ${error.message}`
        })
    }
    }
    

}
//@desc   delete transactiona
//route   post  /api/v1/transactions:id
//acces   public
exports.deleteTransactions = async(req,res,next)=>{
    try {
        let transaction= await Transactions.findById(req.params.id);
        if(!transaction){
            res.status(400).json({
                success: false,
                data:"transaction does not exsit "
            })
        }

        await transaction.remove();
        res.status(200).json({
            success: true,
            transaction:{},
            message:'deleted successfully'
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            error:`the delete route failed because ${error.message}`
        })
        
    }


}