import React,{useReducer} from 'react';
import ExpenseContext from './expenseContext';
import expenseReducer from './expenseReducer.js';
import axios from 'axios'
import { ADD_TRANSACTION,REMOVE_TRANSACTION,GET_TRANSACTIONS,TRANSACTION_FAIL} from './types.js'  


const ExpenseState =(props)=>{
    const initialState={
        transactions:[
            
        ],
        error:null


    }


const [state,dispatch] = useReducer(expenseReducer,initialState);



//get all transactions from db
const getTransactions =async ()=>{
    try {
        const res = await axios.get('http://localhost:8080/api/v1/transactions')
        // const data= res.data
        // console.log(data.data)
        dispatch({type:GET_TRANSACTIONS,payload:res.data.data})
        
        
    } catch (error) {
        dispatch({type:TRANSACTION_FAIL,payload:error.message})
        
    }
}
//add transaction to
const addTransaction =async(transaction)=>{

    try {
        const config={
            headers:{
                "Content-Type": "application/json"
            },
        }
        const res = await axios.post('http://localhost:8080/api/v1/transactions',transaction,config)
        dispatch({
            type:ADD_TRANSACTION,payload:res.data.data
        })
        
    } catch (error) {
        dispatch({type:TRANSACTION_FAIL,payload:error.response.data})

    }

}
//remove transaction
const deleteTransaction =async (id)=>{
    try {
        await axios.delete(`http://localhost:8080/api/v1/transactions/${id}`)
        dispatch({type:REMOVE_TRANSACTION,payload:id})
        
    } catch (error) {
        dispatch({type:TRANSACTION_FAIL,payload:error.response.data})

    }

}


return (
    <ExpenseContext.Provider value={{
        transactions:state.transactions,
        income:state.income,
        expense:state.expense,
        addTransaction,
        deleteTransaction,
        getTransactions

    }}>
        {props.children}
    </ExpenseContext.Provider>
)

}


export default ExpenseState;