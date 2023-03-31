import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import classes from './Expenses.module.css';
import { Items } from '../../modals/expense';

const Expenses: React.FC<Items> = (props) => {
    const expenseItems = props.items.map((item) => (
        <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
        />
    ))
    return (
        <Card className={classes["expenses"]}>
            {expenseItems}
        </Card>
    );
}

export default Expenses;