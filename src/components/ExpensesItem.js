import ExpenseDate from './ExpenseDate'
import '../components/ExpenseItem.css'
import Card from "./Card"
import {useState} from 'react'

function ExpenseItems(props)
{

    const [title,setTitle]=useState(props.title);

    const clickHandler= ()=>
    {
        setTitle(title+" (edited)");
        console.log("Title has changed");
    };
    
    return (

        <Card className='expense-item'>

        <ExpenseDate date={props.date}></ExpenseDate>
        
    <div className='expense-item__description'>
    <h2>{props.title}</h2>
    <div className='expense-item__price'>{props.amount}</div>
    {/* <button onClick={clickHandler} type="submit">Change The title</button> */}
    </div>
    </Card>
    );
}

export default ExpenseItems;