import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Expense } from '../../modals/expense';
import { NewExpense, NewExpenseProps } from '../../modals/newExpense';
import classes from './ExpenseForm.module.css';

const ExpenseForm: React.FC<NewExpenseProps> = (props) => {

    const [userInput, setUserInput] = useState<NewExpense>({
        enteredTitle: '',
        enteredAmount: 0,
        enteredDate: ''
    });

    const titleChangeHandler = (
        event: ChangeEvent<HTMLInputElement> 
    ) => {
        setUserInput((prevInput) => {
            return { 
                ...prevInput, 
                enteredTitle: event.target.value
            }
        })
    }

    const amounthangeHandler = (
        event: ChangeEvent<HTMLInputElement> 
    ) => {
        setUserInput((prevInput) => {
            return { 
                ...prevInput, 
                enteredAmount: Number(event.target.value)
            }
        })
    }

    const dateChangeHandler = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                enteredDate: event.target.value
            }
        })
    }

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        const expenseData: Expense = {
            id: Date.now().toString(),
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        } 
        
        props.onAddExpense(expenseData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={classes['new-expense__controls']}>
                <div className={classes['new-expense__control']}>
                    <label>Title</label>
                    <input
                        onChange={titleChangeHandler}
                        value={userInput.enteredTitle}
                        type='text'
                    />
                </div>
                <div className={classes['new-expense__control']}>
                    <label>Amount</label>
                    <input
                        onChange={amounthangeHandler}
                        value={userInput.enteredAmount}
                        type='number'
                    />
                </div>
                <div className={classes['new-expense__control']}>
                    <label>Date</label>
                    <input
                        onChange={dateChangeHandler}
                        value={userInput.enteredDate}
                        type='date' 
                        min='2019-01-01' 
                        max='2023-12-31' 
                    />
                </div>
            </div>
            <div className={classes['new-expense__actions']}>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;