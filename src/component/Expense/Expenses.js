import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './ExpenseChart';

import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense=props.items.filter(item=>{
    return item.date.getFullYear().toString()===filteredYear;
  })


  const paraHr={
    height:"2px",
    border:"1px white solid",
    backgroundColor:"white",
  };

  let expensesContent = <h3>No Expense Found</h3>;

  if(filteredExpense.length>0){
    expensesContent=filteredExpense.map((item)=>
          (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ));
  }
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <hr style={paraHr}/>
        <ExpenseChart expenses={filteredExpense}/>
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;

//if this file goes big remove expense content as 5.7🙂