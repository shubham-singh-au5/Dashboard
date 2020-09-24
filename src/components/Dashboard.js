import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Dashboard extends Component {

   constructor(props) {
       super();
       this.state = {
        seriesArray: [{
            data: [8200, 9320, 9010, 9340, 12900, 13300, 13200],
            type: 'line',
            smooth: true,
        },
        {
            data: [7200, 8320, 10010, 11340, 13900, 14300, 15200],
            type: 'line',
            smooth: true
        }]
    }
   }

    // componentDidMount() {
    //     this.setState({
    //         seriesArray: [{
    //             data: [8200, 9320, 9010, 9340, 12900, 13300, 13200],
    //             type: 'line',
    //             smooth: true,
    //         },
    //         {
    //             data: [7200, 8320, 10010, 11340, 13900, 14300, 15200],
    //             type: 'line',
    //             smooth: true
    //         }]
    //     })
    // }

    // componentDidUpdate(prevState) {
    //     if (this.prevState.seriesArray !== this.state.seriesArray) {
    //         this.chartChange = 
    //     }
    // }

    chartChange = (e) => {
        console.log(e.target.value);
        console.log(this.state.seriesArray);

        if (e.target.value === 'Sep') {
            console.log(e)
            this.setState({
                seriesArray: [{
                    data: [8200, 9320, 9010, 9340, 12900, 13300, 13200],
                    type: 'line',
                    smooth: true,
                },
                {
                    data: [7200, 8320, 10010, 11340, 13900, 14300, 15200],
                    type: 'line',
                    smooth: true
                }]
            })
        }

        if (e.target.value === 'Aug') {
            this.setState({
                seriesArray: [{
                    data: [10200, 11320, 9010, 10340, 17900, 16300, 14200],
                    type: 'line',
                    smooth: true,
                },
                {
                    data: [12200, 5320, 8010, 10340, 12900, 11300, 18200],
                    type: 'line',
                    smooth: true
                }]
            })
        }

        if (e.target.value === 'Jul') {
            this.setState({
                seriesArray: [{
                    data: [3200, 13320, 12010, 17340, 10900, 11300, 7200],
                    type: 'line',
                    smooth: true,
                },
                {
                    data: [8500, 10320, 15010, 17340, 19900, 9300, 12200],
                    type: 'line',
                    smooth: true
                }]
            })
        }

        if (e.target.value === 'Jun') {
            this.setState({
                seriesArray: [{
                    data: [18200, 19320, 6010, 7340, 10900, 16300, 18200],
                    type: 'line',
                    smooth: true,
                },
                {
                    data: [17200, 15320, 16010, 7340, 13900, 14300, 15200],
                    type: 'line',
                    smooth: true
                }]
            })
        }
        
    }



    render() {
        return (
            <div>
                <div className=' mt-5 w-25' style={{ marginLeft: '30%' }}>
                    <div className='row'>
                        <div className='col-md-6'>
                            For your portfolio
                        </div>
                        <div className='col-md-6'>
                            {/* <div className="dropdown ml-2">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <span className="dropdown-item">September</span>
                                    <span className="dropdown-item">August</span>
                                    <span className="dropdown-item">July </span>
                                    <span className="dropdown-item">June</span>
                                </div>
                            </div> */}
                            <select onChange={(value) => this.chartChange(value)}>
                                <option value='Sep' className="dropdown-item">September</option>
                                <option value='Aug' className="dropdown-item">August</option>
                                <option value='Jul' className="dropdown-item">July </option>
                                <option value='Jun' className="dropdown-item">June</option>
                            </select>
                        </div>
                    </div>

                    <div className='row mt-4 ml-3'>
                        <div className='col-md-4 border border-dark'>
                            Rs 15,329
                        </div>
                        <div className='col-md-4 border border-danger ml-2'>
                            Rs 13,000
                        </div>
                    </div>

                    <div className='row ml-3 mt-1'>
                        <div className='col-md-4'>
                            <p className='font-weight-light'>Total Earning</p>
                        </div>
                        <div className='col-md-4 ml-2'>
                            <p className='font-weight-light'>Amount Paid</p>
                        </div>
                    </div>

                </div>
                <ReactEcharts
                    option={{
                        xAxis: {
                            type: 'category',
                            data: [ 'March', 'April', 'May', 'June', 'July', 'August', 'September']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: this.state.seriesArray,
                    }}

                    style={{ height: "50vh", top: 50, width: "50vw", marginLeft: '25%' }}
                />
            </div>
        );
    }
}

export default Dashboard;