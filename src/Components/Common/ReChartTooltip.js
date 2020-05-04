import React from 'react';
import { Paper } from '@material-ui/core';

const ReChartTooltip = (props) => {
    if(props.payload[0] === undefined){
        return null;
    }
    const { payload, journeyList } = props;
    const toolTipData = journeyList.filter((curr)=>{if(curr.id === payload[0].payload.id){return curr} })
    return (

        <Paper style={{ width: 400, height: 300 }}>
            <p>
                THIS IS  WHERE THE MODAL WOULD BE
            </p>
            {console.log(toolTipData)}
            <p>ID: {toolTipData[0].id}</p>
            <p>CAR ID: {toolTipData[0].car.id}</p>
            <p>CAR NAME: {toolTipData[0].car.name}</p>
            <p>START TIME: {toolTipData[0].journeyStartTime}</p>
            <p>END TIME: {toolTipData[0].journeyEndTime}</p>
            <p>CAR TYPE: {toolTipData[0].carType}</p>
        </Paper>)

}

export default ReChartTooltip;