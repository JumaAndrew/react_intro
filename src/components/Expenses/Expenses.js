import React, { useState } from 'react';

import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';

import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  // const [filteredExpenses, setExpenses] = useState();

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <div className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList expenses={filteredExpenses}></ExpenseList>
      </div>
    </div>
  );
};

export default Expenses;
