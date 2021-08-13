import React ,{ useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    const titleHandler=(event)=>{
        setEnteredTitle(event.target.value);
    };
    const amountHandler=(event)=>{
        setEnteredAmount(event.target.value);
    };
    const dateHandler =(event)=>{
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        
        const newExpenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        // console.log(newExpenseData);
        props.onSaveExchangeData(newExpenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }; 

    //instead of having three individual state, we can have a one state which has all these three values shown at end of file

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="Date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;


//MultiState
// const [userInput,setUserInput]=useState({
//     enteredTitle:'',
//     enteredAmount:'',
//     enteredDate:''
// });

// const titleHandler = (event)=>{
//     // setUserInput({
//     //     ...userInput,
//     //     enteredTitle:event.target.value,
//     // });

//     //as react schedules updateState process and we can have many already scheduled processes.The set we are considering current state(i.e userInput) might be wrong.
//     //and we are updating in wrong state. So instead above method , below method is more prominent and gives current prevState keeping eye on all schedules 
//     console.log(event.target.value);
//     setUserInput((prevState)=>{
//         return {
//             ...prevState,
//             enteredTitle:event.target.value,
//         }
//     })
//     console.log(userInput);
// };

// const amountHandler=(event)=>{
//     setUserInput({
//         ...userInput,
//         enteredAmount:event.target.value,
//     });
// };

// const dateHandler=(event)=>{
//     setUserInput({
//         ...userInput,
//         enteredDate:event.target.value,
//     });
// };
