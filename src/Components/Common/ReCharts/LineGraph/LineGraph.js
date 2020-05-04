import React, { PureComponent } from 'react';
import {
    ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';
import { getDate, getUNIXDate, hashCode, intToRGB } from '../../Functions'
import moment from 'moment'
import ReChartTooltip from '../../ReChartTooltip'

export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/uLysj0u2/';


    render() {
        const { journeyList } = this.props;
        // Get a list of all car names
        const carTypeList = journeyList.map((journey) => { return journey.car.name })
        // Get unique names
        const labels = [...new Set(carTypeList)]
        // Collect all journeys by name
        const journeyByPlatforms = labels.map((type) => {
            let journeyArray = journeyList.filter((journey) => {
                if (type === journey.car.name) {
                    return journey
                }
            })
            return journeyArray
        })

        const nameTimeArray = journeyByPlatforms.map((currentCarJourney) => {
            let jc = 0;
            const colour = intToRGB(hashCode(currentCarJourney[0].car.name))
            const currentJourneyTimeArray = currentCarJourney.map((journey) => {
                jc++;
                return { "journeyId": journey.id, "name": journey.car.name, "time": journey.journeyStartTime, "timesSeen": jc, "plotCol": `#${colour}` }
            })
            return currentJourneyTimeArray
        });


        let notConst = nameTimeArray.map((eachArray) => {
            { console.log(eachArray[0]) }
            const data = eachArray.map((currentData) => { return { "id": currentData.journeyId, "name": currentData.name, "x": currentData.time, "y": currentData.timesSeen } })
            return data;
            // return <Scatter key={eachArray[0].name} name={eachArray[0].name} data={data} fill="#8884d8" />
        })

        console.log(notConst)



        return (
            <ScatterChart
                width={900}
                height={300}
                margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                }}
            >
                <CartesianGrid />
                <XAxis
                    dataKey="x"
                    domain={['auto', 'auto']}
                    name='Time'
                    tickFormatter={(unixTime) => moment(getUNIXDate(unixTime)).format('HH:mm Do')}
                    type='number'
                    allowDuplicatedCategory={false} />
                <YAxis name="TimesSeen" type="number" dataKey="y" />
                {/* <Tooltip cursor={{ strokeDasharray: '3 3' }} /> */}
            <Tooltip content={<ReChartTooltip journeyList={this.props.journeyList}/>} />
                <Scatter name={notConst[0][0].name} data={notConst[0]} fill={`#${intToRGB(hashCode(notConst[0][0].name))}`} />
                <Scatter name={notConst[1][0].name} data={notConst[1]} fill={`#${intToRGB(hashCode(notConst[1][0].name))}`} />
                <Scatter name={notConst[2][0].name} data={notConst[2]} fill={`#${intToRGB(hashCode(notConst[2][0].name))}`} />
            </ScatterChart>
        );
    }
}
