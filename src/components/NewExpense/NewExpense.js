import React,{useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const [newExpense, setNewExpense] = useState(true)
    const addNewExpenseHandler = () =>{
        setNewExpense(false)
    }
    const hideForm = ()=>{
        setNewExpense(true)
    }
    const saveExpenseData = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.addExpense(enteredExpenseData)

    }
  return (
    <div className='new-expense'>
        {newExpense ? <button onClick={addNewExpenseHandler}>Add New Expense</button>
        : <ExpenseForm onSaveExpenseData = {saveExpenseData} hideForm={hideForm} /> }
        
        

        
    </div>
  )
}

export default NewExpense