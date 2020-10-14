const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const transactionSchema = new Schema ({ 
    text:{
        type: String,
        trim: true,
        required: [true, 'please add a text']
    },
    amount:{
        type:Number,
        required: [true, 'please add the amount']
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Transaction',transactionSchema)