import ExpenseDate from '../components/ExpenseDate'
import '../components/ExpenseItem.css'
import Card from "../components/Card"
function ExpenseItems(props)
{

    const x= ()=>
    {
        console.log("Title has changed");
    };
    
    return (

        <Card className='expense-item'>

        <ExpenseDate date={props.date}></ExpenseDate>
        
    <div className='expense-item__description'>
    <h2>{props.title}</h2>
    <div className='expense-item__price'>{props.amount}</div>
    <button onClick={x} type="submit">Change The title</button>
    </div>
    </Card>
    );
}

export default ExpenseItems;