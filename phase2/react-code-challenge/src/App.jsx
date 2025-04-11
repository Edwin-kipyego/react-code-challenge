import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm.jsx';
import ExpenseList from './components/ExpenseList.jsx';
import ExpenseFilter from './components/ExpenseFilter.jsx';
import './App.css';
import DailyTotals from './components/DailyTotals.jsx';



function App() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState('');

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (indexToDelete) => {
    const updated = expenses.filter((_, index) => index !== indexToDelete);
    setExpenses(updated);
  };

  const sortByCategory = () => {
    const sorted = [...expenses].sort((a, b) =>
      a.category.localeCompare(b.category)
    );
    setExpenses(sorted);
  };

  const sortByDescription = () => {
    const sorted = [...expenses].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
    setExpenses(sorted);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />

      <ExpenseFilter filter={filter} setFilter={setFilter} />

      <div className="sort-buttons">
        <button onClick={sortByCategory}>Sort by Category</button>
        <button onClick={sortByDescription}>Sort by Description</button>
      </div>

      <ExpenseList expenses={expenses} filter={filter} onDelete={deleteExpense} />
      <DailyTotals expenses={expenses} />
    </div>
  );
}

export default App;
