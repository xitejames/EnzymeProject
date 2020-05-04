import React, { Component } from 'react'
import Chart from "chart.js";
//import { getDate, getTotalMinutes } from '../Functions'

export default class BarChart extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        const carTypeList = this.props.journeyList.map((journey) => { return journey.car.name })
        const labels = [...new Set(carTypeList)]
        const countArray = labels.map((type) => {
            let currentCounter = 0;
            carTypeList.forEach((newType) => {
                if(type === newType){
                    currentCounter ++;
                }
            })
            return currentCounter
        })

        new Chart(myChartRef, {
            type: "bar",
            data: {
                //Bring in data
                labels: labels,
                datasets: [
                    {
                        label: labels,
                        data: countArray,
                    },
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
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