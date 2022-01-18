import '../components/ExpenseItem.css'

function ExpenseItems(props)
{

    let date=props.date.getDate();
    let Month =props.date.toLocaleString('default', { month: 'long' });
    let year=props.date.getYear();
    // console.log(props.date)
    
    return (

        <div className='expense-item'>

    <div>
        <div>{Month}</div>
        <div>{props.date.getFullYear()}</div>
        <div>{date}</div>
        
        </div>

    <div className='expense-item__description'>
    <h2>{props.title}</h2>
    <div className='expense-item__price'>{props.amount}</div>
    </div>
    </div>
    );
}

export default ExpenseItems;