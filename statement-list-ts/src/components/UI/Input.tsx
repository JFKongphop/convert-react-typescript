import React from 'react'
import InputProps from '../../modals/input'

const Input: React.FC<InputProps>  = (props) => {
    return (
        <div className={props.className}>
            <label>{props.title}</label>
            <input 
                type={props.type}
                onChange={props.onChange}
                placeholder={props.placeholder}
                value={props.value}
            />
        </div>

    )
}

export default Input