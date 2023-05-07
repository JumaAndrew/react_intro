import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [titleInput, setTitle] = useState('');
  const [amountInput, setAmount] = useState('');
  const [dateInput, setDate] = useState('');

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const formSubmitHnadler = (e) => {
    e.preventDefault();

    const inputExpenses = {
      title: titleInput,
      amount: amountInput,
      date: dateInput,
    };

    props.onSave(inputExpenses);

    // setTitle('');
    // setAmount('');
    // setDate('');
  };

  return (
    <form onSubmit={formSubmitHnadler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
