import '../NewExpenses/NewExpenses.css';
import ExpenseForm from './ExpenseForm';
const NewExpenses = (props) => {

    const onSaveExpenseHandler=(expenses_props)=>
    {
        console.log(expenses_props);
        props.onAddExpense(expenses_props);
    };

    return(


    <div className="new-expense">
     <ExpenseForm onSaveExpenseData={onSaveExpenseHandler}></ExpenseForm>
    </div>
)
};

export default NewExpenses;