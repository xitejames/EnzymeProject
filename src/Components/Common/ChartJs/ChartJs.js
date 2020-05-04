import React, { Component } from 'react'
import Chart from "chart.js";
import { getDate, getTotalMinutes } from '../Functions'

export default class LineGraph extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        const carTypeList = this.props.journeyList.map((journey) => { return journey.car.name })
        //const labels = [...new Set(carTypeList)]

        // "id": 1,
        //     "car": {
        //         "id": 1,
        //         "name": "Audi"
        //     },
        //     "carType": "Disel",
        //     "journeyStartTime": 1588021501,
        //     "journeyEndTime": 1588059709

        new Chart(myChartRef, {
            type: "scatter",
            data: {
                //Bring in data
                datasets: [
                    {
                        label: "Audi",
                        data: [
                            {
                                x: getDate(1588021501),
                                y: 0
                            }, {
                                x: getDate(1588039709),
                                y: 3
                            },
                        ],
                    },
                ]
            },
            options: {
                scales: {
                    xAxes: [{
                        type: 'time',
                        distribution: 'linear'
                    }],
                }
            }
        });
    }
    render() {
        return (
            <canvas
                style={{ height: '100%', maxHeight: 350, width: '100%' }}
                id="myChart"
                ref={this.chartRef}
            />
        )
    }
}