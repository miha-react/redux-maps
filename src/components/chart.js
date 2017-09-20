import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data) {
    const temCelsius = data.reduce((sum, number)=>sum+number,0)/data.length;
    return temCelsius.toFixed(1);
}


export default (props)=>{
    return(
        <div>
            <Sparklines data={props.data} height={120} width={180}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type='avg' />
            </Sparklines>


            <div>{average(props.data)} {props.units}</div>
        </div>
    )
}