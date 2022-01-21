import "../NewExpenses/ExpensesForm.css";
import {useState} from 'react'
const ExpenseForm = (props) => {
    const [title, setTitle] = useState("");
    const [Amount, setAmount] = useState("");
    const [date_1, setDate] = useState("");

    const titleChangeHandler =(event)=>
    {
        setTitle(event.target.value);
        // console.log(event.target.value);
    };
    const amountChangeHandler =(event)=>
    {
        setAmount(event.target.value);
        // console.log(event.target.value);
    };
    const DateChangeHandler =(event)=>
    {
        setDate(new Date(event.target.value));
        // console.log(event.target.value);
    };
    function NewExpenseAdded(event)
    {
        event.preventDefault();
        const new_obj={
            id: Math.random().toString(),
            title: title,
            amount: Amount,
            date: date_1
        };
        props.onSaveExpenseData(new_obj);
        // console.log(new_obj);
        setAmount("");
        setTitle("");
        setDate("");
    }
    return (

        <form onSubmit={NewExpenseAdded}>
            <div className="new-expense__controls">
            <div className="new-expense__controls">
        <label>Title</label>
    <input type="text" onChange={titleChangeHandler} value={title}></input>
    </div>
    <div className="new-expense__controls">
        <label>Amount</label>
    <input type="Number"  onChange={amountChangeHandler} value={Amount}></input>
    </div>
    <div className="new-expense__controls">
        <label>Date</label>
    <input type="Date" min="2019-01-01" max="2022-12-31" onChange={DateChangeHandler} value={Date}></input>
    </div>
    </div>
    <div className="new-expense__actions">
        <button type="Submit">Add Expense</button>
        </div>
        </form>
    )
};

export default ExpenseForm