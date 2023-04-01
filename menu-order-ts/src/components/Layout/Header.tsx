import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import { Header } from '../../models/header';
import classes from './Header.module.css';
const mealsImage = 'https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true';


const Header: React.FC<Header> = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="logo" />
            </div>
        </>
    )
}

export default Header