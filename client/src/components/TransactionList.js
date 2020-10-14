import React,{ Fragment,useContext,useEffect} from 'react';
import ExpenseContext from './context/expenseContext';
import TransactionItem from './TransactionItem.js';



const TransactionList = () => {

  const expenseContext = useContext(ExpenseContext);
  const { transactions,getTransactions } = expenseContext;

  useEffect(() =>{
    getTransactions()
    //eslint-disable-next-line
  },[])
  return (
    <Fragment>
      <h3>History</h3>

      <ul  className="list">
        { transactions && transactions.map(transaction=>(
          <TransactionItem transaction={transaction} key={transaction._id}/>
        )) }
        {/* <li className="minus">
          Cash <span>-$400</span>
          <button className="delete-btn">x</button>
        </li> */}
      </ul>
    </Fragment>
  );
};

export default TransactionList;
