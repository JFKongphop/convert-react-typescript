import React from 'react';
import Card from '../../models/card';
import classes from './Card.module.css';

const Card: React.FC<Card> = (props) => {
    return (
        <div className={classes.card}>{props.children}</div>
    )
}

export default Card;