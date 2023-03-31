import React from 'react'
import ButtonProps from '../../modals/button'

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <div>
            <button
                type={props.type}
                className={props.className}
                disabled={props.disabled}
            >
                {props.title}
            </button>
        </div>
    )
}

export default Button;