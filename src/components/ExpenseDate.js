import '../components/ExpenseDate.css'

function ExpenseDate(props)
    {
        let date=props.date.getDate();
        let Month =props.date.toLocaleString('default', { month: 'long' });
        let year=props.date.getFullYear();
        return (
            <div className="expense-date">
            <div className="expense-date__month">{Month}</div>
            <div className="expense-date__year">{year}</div>
            <div className='expense-date__day'>{date}</div>
            
            </div>
        )
    }

    export default ExpenseDate;