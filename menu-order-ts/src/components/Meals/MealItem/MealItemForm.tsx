import React, { FormEvent, useRef } from 'react';
import { MealItemForm } from '../../../models/mealItemForm';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';


const MealItemForm: React.FC<MealItemForm> = (props) => {
    const amountInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: FormEvent): void => {
        event.preventDefault();

        const enteredAmount = Number(amountInputRef.current!.value);

        if (enteredAmount < 1 || enteredAmount > 5) { 
            return;
        }

        props.onAddToCart(enteredAmount)
        amountInputRef.current!.value = (1).toString();        
    }


    return (
        <form 
            className={classes.form}
            onSubmit={submitHandler}
        >
            <Input 
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm