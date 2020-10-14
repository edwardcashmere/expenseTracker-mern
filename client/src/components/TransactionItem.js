import React,{ Fragment,useContext} from 'react';
import ExpenseContext from './context/expenseContext';
const TransactionItem = ({transaction:{text,amount,_id}}) => {
    let sign =amount < 0 ? '-' : '+';
    const expenseContext = useContext(ExpenseContext);
    const { deleteTransaction } = expenseContext
    return (
        <Fragment>
        {amount < 0 ?(   <li className="minus">
          {text} <span>{`${sign}$${Math.abs(amount)}`}</span>
          <button className="delete-btn" onClick={()=>deleteTransaction(_id)} >x</button>
        </li> ):(   <li className="plus">
          {text} <span>{`${sign}$${Math.abs(amount)}`}</span>
          <button className="delete-btn" onClick={()=>deleteTransaction(_id)} >x</button>
        </li> ) }

        </Fragment>
    
    )
}

export default TransactionItem;
