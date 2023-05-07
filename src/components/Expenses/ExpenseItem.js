import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <div>
      <div className="expense-item">
        <ExpenseDate date={props.expenses[0].date} />
        <h2>{props.expenses[0].title}</h2>
        <label className="expense-item__price">
          {props.expenses[0].amount}
        </label>
      </div>
      <div className="expense-item">
        <ExpenseDate date={props.expenses[1].date} />
        <h2>{props.expenses[1].title}</h2>
        <label className="expense-item__price">
          {props.expenses[1].amount}
        </label>
      </div>
      <div className="expense-item">
        <ExpenseDate date={props.expenses[2].date} />
        <h2>{props.expenses[2].title}</h2>
        <label className="expense-item__price">
          {props.expenses[2].amount}
        </label>
      </div>
      <div className="expense-item">
        <ExpenseDate date={props.expenses[3].date} />
        <h2>{props.expenses[3].title}</h2>
        <label className="expense-item__price">
          {props.expenses[3].amount}
        </label>
      </div>
    </div>
  );
};

export default ExpenseItem;
