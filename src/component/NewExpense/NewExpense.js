import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense =(props)=>{
    const [isEditing,setIsEditing] = useState(false);
    const saveExchangeDataHandler=(newEnteredExpenseData) => {
        const newExpenseData={
            ...newEnteredExpenseData,
            id:Math.random().toString()
        };

        console.log(newExpenseData);
        props.onNewExpenseEntered(newExpenseData);

        setIsEditing(false);
    };

    const startAddHandler = () =>{
        setIsEditing(true);
    };

    const stopAddHandler = () =>{
        setIsEditing(false);
    };



    return (
        <div className="new-expense">
            {!isEditing && 
            (<button onClick={startAddHandler}>Add New Expense</button>)}

            {isEditing && 
            (<ExpenseForm  onCancel={stopAddHandler} onSaveExchangeData={saveExchangeDataHandler}/>)}
            
        </div>
    );
};

export default NewExpense;