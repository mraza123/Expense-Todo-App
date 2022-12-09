// import logo from './logo.svg';
// import './App.css';
import React,{useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


const Dummy_Expense = [
  {
    id: "e1",
    title: "Bike Insurance",
    amount: 350,
    date: new Date(2022, 11, 25)
  },
  {
    id: "e2",
    title: "Books",
    amount: 450,
    date: new Date(2021, 8, 22)
  },
  {
    id: "e3",
    title: "House Rent",
    amount: 600,
    date: new Date(2020, 4, 5)
  },
  {
    id: "e4",
    title: "Mac Book Pro",
    amount: 1000,
    date: new Date(2019, 11, 12)
  }
]

function App() {
  const [expenses, setExpenses] = useState(Dummy_Expense)

  const addExpenseHandler = (expense)=>{
    setExpenses([expense, ...expenses])
  }

 

  // return React.createElement('div',{},React.createElement(Expenses,{items: expenses}))

  return (
    <div className="App">
      <NewExpense addExpense={addExpenseHandler}/>
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
