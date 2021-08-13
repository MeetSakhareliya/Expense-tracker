import React,{ useState } from "react";

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props)=>{
    let sumExpense=0;
    for(const list of props.dataPoints){
        sumExpense+=list.value;
    }
   
    return <div className="chart">
        {props.dataPoints.map(dataPoint=>(
            <ChartBar 
                key={dataPoint.label}
                value={dataPoint.value} 
                sumValue={sumExpense} 
                label={dataPoint.label}
            />
        ))}
    </div>
};

export default Chart;