import React, { Component } from 'react'
import Chart from "chart.js";
import ReactDOM from 'react-dom';
import { getDate, getTotalMinutes, hashCode, intToRGB } from '../Functions'
import Test from '../Test'
import { Provider } from 'react-redux';
import Store from '../../../Redux/Store';

class ScatterGraph extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        // Create reference for Chart
        const myChartRef = this.chartRef.current.getContext("2d");
        // Get a list of all car names
        const carTypeList = this.props.journeyList.map((journey) => { return journey.car.name })
        // Get unique names
        const labels = [...new Set(carTypeList)]
        // Collect all journeys by name
        const journeyByPlatforms = labels.map((type) => {
            let journeyArray = this.props.journeyList.filter((journey) => {
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
        })

        new Chart(myChartRef, {
            "type": "scatter",
            "data": {
                //Bring in data
                labels: labels,
                datasets: nameTimeArray.map((overall) => {
                    const data = overall.map((currentData) => { return { "t": currentData.journeyId, "x": currentData.time, "y": currentData.timesSeen } })
                    console.log(overall[0].plotCol)
                    return {
                        "label": overall[0].name,
                        "data": data,
                        "backgroundColor": overall[0].plotCol
                    }

                }),
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function (value, index, values) {
                                return getDate(value);
                            }
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                },
                tooltips: {
                    // Disable the on-canvas tooltip
                    enabled: false,
                    custom: function (tooltipModel) {
                        var tooltipEl = document.getElementById('chartjs-tooltip');

                        if (!tooltipEl) {
                            tooltipEl = document.createElement('div');
                            tooltipEl.id = 'chartjs-tooltip';
                            document.body.appendChild(tooltipEl);
                        }
                        ReactDOM.render(
                            <Provider store={Store}>
                                <Test data={tooltipModel} />
                            </Provider>, document.getElementById('chartjs-tooltip'))

                        if (tooltipModel.opacity === 0) {
                            tooltipEl.style.opacity = 0;
                            return;
                        }

                        tooltipEl.classList.remove('above', 'below', 'no-transform');
                        if (tooltipModel.yAlign) {
                            tooltipEl.classList.add(tooltipModel.yAlign);
                        } else {
                            tooltipEl.classList.add('no-transform');
                        }

                        // `this` will be the overall tooltip
                        var position = this._chart.canvas.getBoundingClientRect();

                        // Display, position, and set styles for font
                        tooltipEl.style.opacity = 1;
                        tooltipEl.style.position = 'absolute';
                        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                        tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                        tooltipEl.style.pointerEvents = 'none';
                    }
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

export default ScatterGraph; 