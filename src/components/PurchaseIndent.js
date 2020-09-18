import React, { Component } from 'react'

export default class PurchaseIndent extends Component {

    constructor(props) {
        super();
        this.state = {
            value1: 'PC-1441',
            value2: 'Kamal Nath, Kurla East, Mumbai - 400024'
        }
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }


    handleChange1(e) { 
        this.setState({ value1: e.target.value,
        }); }

    handleChange2(e) { 
        this.setState({ value2: e.target.value,
        }); }

    render() {
        return (
            <div className="row mt-5">
                <div className="col-md-2 mt-5 ml-3">
                    <p className="mt-2"> <i className="fa fa-home" style={{ fontSize: '24px' }}></i> <br /> Home</p>
                    <p className="mt-2"><i className="fa fa-question-circle" style={{ fontSize: '24px' }}></i> <br /> Enquiry</p>
                    <p className="mt-2"><i className="fa fa-file-o" style={{ fontSize: '24px' }}></i> <br /> Draft</p>
                    <p className="mt-2"><i className="fa fa-pie-chart" style={{ fontSize: '24px' }}></i> <br /> PI</p>
                    <p className="mt-2"><i className="fa fa-envelope" style={{ fontSize: '24px' }}></i> <br /> Chat </p>
                    <p className="mt-2"><i className="fa fa-cog" style={{ fontSize: '24px' }}></i> <br /> Settings </p>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="mb-5"><strong>Purchase Indent</strong></h2>
                            <label for="exampleInputEmail1">Purchase Indent number</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"value = {this.state.value1} onChange={this.handleChange1} />

                            <label className="mt-2" for="exampleInputEmail1">Subject</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value= {this.state.value2}  onChange={this.handleChange2} />

                        </div>

                        <div className="col-md-6">
                            <label style={{ visibility: 'hidden' }} for="exampleInputEmail1">Purchase Indent number</label>
                            <input style={{ visibility: 'hidden' }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <div className="row ml-2">
                                <div className="col-md-3">
                                    <p>Date</p>
                                    <p>18-08-2020</p>
                                </div>
                                <div className="col-md-3">
                                    <p>Order No.</p>
                                    <p>7661</p>
                                </div>
                                <div className="col-md-3">
                                    <p>Version No.</p>
                                    <p>1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
