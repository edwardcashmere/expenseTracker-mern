import React from 'react';
import Header from './components/Header.js';
import Balance from './components/Balance.js';
import IncomeExpenses from './components/IncomeExpenses.js';
import TransactionList from './components/TransactionList.js';
import ExpenseState from './components/context/ExpenseState';
import AddTransactionForm from './components/AddTransactionForm.js';
import './App.css';

function App() {
  return (
    <ExpenseState>
      <div>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransactionForm />
        </div>
      </div>
    </ExpenseState>
  );
}

export default App;
