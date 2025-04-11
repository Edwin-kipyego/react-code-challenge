import React from 'react';

const ExpenseFilter = ({ filter, setFilter }) => {
  return (
    <input
      type="text"
      placeholder="Search by name"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default ExpenseFilter;