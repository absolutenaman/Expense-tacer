import '../NewExpenses/NewExpenses.css';
import ExpenseForm from './ExpenseForm';
const NewExpenses = (props) => {
return(
    <div className="new-expense">
     <ExpenseForm></ExpenseForm>
    </div>
)
};

export default NewExpenses;