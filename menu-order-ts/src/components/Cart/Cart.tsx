import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/cart-hook";
import { cartAction } from "../../store/cartStore";
import { Cart, Item } from "../../models/cartType";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from './Cart.module.css';

const Cart: React.FC<Cart> = (props) => {
    const dispatch = useAppDispatch();
    const { items, totalAmount: amount } = useAppSelector((state) => state.cartConsole);
    const totalAmount = `$${amount.toFixed(2)}`;
    const hasItems = items.length > 0;
    
    const cartItemsAddHandler = (item: Item) => {
        console.log(item);
        
        dispatch(cartAction.addItem({ ...item, amount: 1}));
    }

    const cartItemsRemoveHandler = (id: string) => {
        dispatch(cartAction.removeItem(id));
    }
    
    const cartItems = (
        <ul className={classes['cart-items']}>
            {items.map((item) => (
                <CartItem 
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemsRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemsAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    )

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button 
                    className={classes['button--alt']}
                    onClick={props.onClose}
                >
                    Close
                </button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;