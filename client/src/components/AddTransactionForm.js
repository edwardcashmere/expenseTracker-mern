import React, { Fragment,useState,useContext } from 'react';
import ExpenseContext from './context/expenseContext.js';


const AddTransactionForm = () => {
  const [text,setText]= useState('');
  const [amount,setAmount] = useState('');
  const expenseContext = useContext(ExpenseContext);
  const {addTransaction} = expenseContext;
  const onSubmit=(e)=>{
    e.preventDefault();
    addTransaction({text,amount})
    setText('')
    setAmount('')
  }
  return (
    <Fragment>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number"  value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn" onClick={onSubmit}>Add transaction</button>
      </form>
    </Fragment>
  );
};

export default AddTransactionForm;
