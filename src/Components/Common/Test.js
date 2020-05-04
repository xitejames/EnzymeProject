import React from 'react';
import { connect } from 'react-redux';
import { getDate } from './Functions'


const Test = (props) => {
    const { data, journeyList } = props;

    if (data === undefined || data.dataPoints === undefined) {
        return null;
    }

    const getCar = () => {
        
    }

    return (
        <div style={{ backgroundColor: 'white', borderColor: 'black' }} >
            {console.log(journeyList)}
            {console.log(data)}
            <p>Journey count: {data.dataPoints[0].yLabel}</p>
            <p>Time: {getDate(data.dataPoints[0].xLabel)}</p>
        </div >
    )
}


const mapStateToProps = state => ({
    journeyList: state.Journeys.journeyList,
});

export default connect(mapStateToProps)(Test); 