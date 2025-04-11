import React from 'react';

const DailyTotals = ({ expenses }) => {
  // Grouping expenses by date and summing up the amounts
  const grouped = expenses.reduce((acc, curr) => {
    const date = curr.date;
    const amount = parseFloat(curr.amount);

    if (!acc[date]) {
      acc[date] = amount;
    } else {
      acc[date] += amount;
    }

    return acc;
  }, {});

  const sortedDates = Object.keys(grouped).sort((a, b) => new Date(b) - new Date(a));

  return (
    <div className="daily-totals">
      <h3>Daily Expense Totals</h3>
      <ul>
        {sortedDates.map(date => (
          <li key={date}>
            {date}: <strong>KES {grouped[date].toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyTotals;