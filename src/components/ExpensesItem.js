import '../components/ExpenseItem.css'

function ExpenseItems()
{
    const date=new Date(27,2,1999);
    // console.log(date.toISOString());
    const cost="$247.57";
    const expense_title="Car Insurance";
    return (


        <div className='expense-item'>
    <div>{date.toISOString()}</div>

    <div className='expense-item__description'>
    <h2>{expense_title}</h2>
    <div className='expense-item__price'>{cost}</div>
    </div>
    </div>
    );
}

export default ExpenseItems;