import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const expenseAddedHandler = (inputExpenses) => {
    props.onAddingExpense(inputExpenses);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSave={expenseAddedHandler} />
    </div>
  );
};

export default NewExpense;
