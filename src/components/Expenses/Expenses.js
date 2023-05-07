import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <div className="expenses">
      <ExpenseItem expenses={props.expenses} />
    </div>
  );
};

export default Expenses;
