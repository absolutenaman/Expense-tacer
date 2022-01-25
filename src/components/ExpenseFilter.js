import "../components/ExpenseFilter.css";


const expenseFilter= (props)=>
{
    function Year_changed(event)
    {
        props.onFilterChange(event.target.value);
        // console.log(event.target.value);
        // console.log("Year has changed");
        
    }
    
    return(
        
    <div >   
           <p>Filter By </p> 
           <button onClick={Year_changed} value="2019">
        2019
        </button>
        <button onClick={Year_changed} value="2020">
        2020
        </button>
        <button onClick={Year_changed} value="2021">
        2021
        </button>
        <button onClick={Year_changed} value="2022">
        2022
        </button>
        </div>
  
    );
};

export default expenseFilter