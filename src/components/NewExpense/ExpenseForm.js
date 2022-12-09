import { events } from '@react-three/fiber'
import React,{useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [newExpense,setNewExpense] = useState()

    const cancleExpenseHandler = ()=>{
        setNewExpense(false)
    }
    const addNewExpenseHandler = ()=>{
        setNewExpense(true)
    }

    const titleChangeHandler = (event) =>{
        setEnteredTitle(  event.target.value)
    }
    const amountChangeHandler = (event) =>{
        setEnteredAmount( event.target.value)
    }
    const dateChangeHandler = (event) =>{
        setEnteredDate( event.target.value)
    }

    const submitHandler = (event) =>{
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
  return (
    <>
   
        <form onSubmit={submitHandler}>
    
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' onChange={titleChangeHandler} value={enteredTitle} />
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' onChange={amountChangeHandler} min='0.01' step='0.01' value={enteredAmount} />
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' min='2019-01-01' max='2030-12-31' onChange={dateChangeHandler} value={enteredDate} />
        </div>
    </div>
    <div className='new-expense__actions'>
        <button onClick={props.hideForm}>Cancle</button>
        <button type="submit">Add Expense</button>
    </div>
    
   </form>
   
   
   </>
  )
}

export default ExpenseForm