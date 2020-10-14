import React,{ Fragment, useContext} from 'react';
import ExpenseContext from './context/expenseContext.js';

const Balance = () => {
    const expenseContext = useContext(ExpenseContext);
    const { transactions } =expenseContext
    let amounts= transactions.map(transaction =>transaction.amount)
    let total = amounts.reduce((accum,amount)=> accum+=amount,0).toFixed(2)
    return (
        <Fragment>
            <h4>YOUR BALANCE</h4>
    <h1 >{`$${total}`}</h1>
        </Fragment>
    )
}

export default Balance
