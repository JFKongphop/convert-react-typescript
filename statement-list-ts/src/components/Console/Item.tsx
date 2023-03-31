import React from 'react';
import ItemsProps from '../../modals/transaction';
import { statementStatus, useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import classes from './Item.module.css'
import { statementAction } from '../../store/statementConsole';


const Item: React.FC<ItemsProps> = (props) => {
    const { statement } = useAppSelector((state) => state.statementConsole);
    
    const dispatch = useAppDispatch()
    

    const transactions = statement.map((tx) => (
        <li 
            key={tx.id} 
            className={classes[statementStatus(tx.amount, 'status')]}
            onClick={() => dispatch(statementAction.removeStatement({id: tx.id}))}
        >
            {tx.title} <span>{statementStatus(tx.amount, 'symbol')}</span>
        </li>
    ))

    return (
        <ul className={props.className}>
            {transactions}
        </ul>
    )
}

export default Item