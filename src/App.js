import ExpenseItems from "../src/components/ExpensesItem"
import NewExpenses from "./components/NewExpenses/NewExpenses";
import {useState} from 'react'
import ExpenseFilter from '../src/components/ExpenseFilter'

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const old=expenses;
function App() {
  const [expensesState, setExpensesState] = useState(expenses);
  console.log(expensesState);
  
  const onAddExpenseHandler=(NewExpenseProps)=>
{
  // console.log(NewExpenseProps +" Added_console");
  let x=[...expensesState];
     x.push(NewExpenseProps);
  // expenses.push(NewExpenseProps);
  // console.log(JSON.stringify(x)+"After addition");
  setExpensesState(x);
 
};


const onFilterChangeHandler = (new_year)=>
{
  // const [filtered_year,setFilteredYear]=useState('2019');
  // console.log(new_year);
  let filtered_data=[];
  // filtered_data.push(old);
  console.log(old)
 setExpensesState(old);
 console.log(expensesState)
  expensesState.forEach(element => {
    // console.log(element.date.getFullYear().toString());
    // console.log(new_year);
      if(element.date.getFullYear().toString()==new_year)
  {
    filtered_data.push(element );
    //  console.log(element);

  }
  });
  setExpensesState(filtered_data);
  // console.log(JSON.stringify(filtered_data)+"filtered_data");
  // setFilteredYear(new_year);

}
  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <NewExpenses onAddExpense={onAddExpenseHandler}></NewExpenses>
   <ExpenseFilter onFilterChange={onFilterChangeHandler}></ExpenseFilter>
   
     { expensesState.map((expense,i) =>
      {
       return(
        <div key={i}> 
        <ExpenseItems title={expense.title}
       date={expense.date}
       amount={expense.amount}></ExpenseItems>
       </div>
       )
      }
      )}
     
  
    </div>
  );
}

export default App;
