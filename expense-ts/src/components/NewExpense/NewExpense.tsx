import React, { useState } from 'react'
import { Expense } from '../../modals/expense'
import { NewExpenseProps } from '../../modals/newExpense'
import ExpenseForm from './ExpenseForm'

import classes from './NewExpense.module.css'

const NewExpense: React.FC<NewExpenseProps> = (props) => {

    const [isShowingForm, setIsShowingForm] = useState<{bool: boolean}>(false);

    return (
        <div className={classes['new-expense']}>
            <ExpenseForm onAddExpense={props.onAddExpense}/>
        </div>
    )
}

export default NewExpense