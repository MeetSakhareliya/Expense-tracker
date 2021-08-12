import React ,{ useState } from 'react';
import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    const [title,setTitle]=useState(props.title);   //gives array. first element is current state value of var and second ele. is a function to update that value
    
    const clickHandler=()=>{
        setTitle('updated!');       //takes argument new value of an variable and it forces to re-execute component function.it doesn't change value right away but schedules.
        console.log(title);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;