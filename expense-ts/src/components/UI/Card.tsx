import React from 'react';
import Card from '../../modals/card';

import './Card.css';

const Card: React.FC<Card> = (props) => {
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;
};

export default Card;