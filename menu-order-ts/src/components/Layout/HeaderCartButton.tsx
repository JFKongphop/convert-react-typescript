import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/cart-hook';
import { HeaderCartButton } from '../../models/header';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'


const HeaderCartButton: React.FC<HeaderCartButton> = (props) => {

    const [btnIsHighLighted, setBtnIsHighLighted] = useState<boolean>(false);

    const items = useAppSelector((state) => state.cartConsole.items);
    const numberOfCartItems = items.reduce((curItem, item) => {
        return curItem + item.amount
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        setBtnIsHighLighted(true);

        setTimeout(() => {
            setBtnIsHighLighted(false);
        }, 300);
    })

    return (
        <button 
            className={btnClasses}
            onClick={props.onClick}
        >
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton;