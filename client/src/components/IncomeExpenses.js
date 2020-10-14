import React, { useContext } from 'react';
import ExpenseContext from './context/expenseContext';

const IncomeExpenses = () => {
  const expenseContext = useContext(ExpenseContext);
  const { transactions } = expenseContext;
  let income = transactions.map(transaction=>transaction.amount)
    .filter((transaction) => transaction> 0)
    .reduce((accum, amount) => accum += amount, 0).toFixed(2)
    ;
  let expense = transactions.map(transaction =>transaction.amount)
    .filter((transaction) => transaction < 0)
    .reduce((accum, amount) => accum += amount, 0).toFixed(2)
    ;
 expense=Math.abs(expense).toFixed(2)
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
  <p className="money plus">{`$${income}`}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">
          {`-$${expense}`}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
