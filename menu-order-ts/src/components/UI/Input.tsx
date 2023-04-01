import React from 'react';
import { InputProps, Ref } from '../../models/input';
import classes from './Input.module.css'

const Input = React.forwardRef<Ref, InputProps>((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    )
})

export default Input