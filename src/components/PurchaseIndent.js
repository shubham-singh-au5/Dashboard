import React, { Component } from 'react'

export default class PurchaseIndent extends Component {
    render() {
        return (
            <div className="row mt-5">
                <div className="col-md-2 mt-5 ml-3">
                    <p className="mt-2"> <i className = "fa fa-home" style = {{fontSize: '24px'}}></i> <br /> Home</p>
                    <p className="mt-2"><i className = "fa fa-question-circle" style = {{fontSize: '24px'}}></i> <br /> Enquiry</p>
                    <p className="mt-2"><i className = "fa fa-file-o" style = {{fontSize: '24px'}}></i> <br /> Draft</p>
                    <p className="mt-2"><i className = "fa fa-pie-chart" style = {{fontSize: '24px'}}></i> <br /> PI</p>
                    <p className="mt-2"><i className = "fa fa-envelope" style = {{fontSize: '24px'}}></i> <br /> Chat </p>
                    <p className="mt-2"><i className = "fa fa-cog" style = {{fontSize: '24px'}}></i> <br /> Settings </p>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="mb-5"><strong>Purchase Indent</strong></h2>
                            <label for="exampleInputEmail1">Purchase Indent number</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value = "PC-1441" required />

                            <label className="mt-2" for="exampleInputEmail1">Subject</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value = "Purchase indent of 25 mm LMS GI Conduit for CIDCO" required />

                        </div>

                        <div className="col-md-6">
                            <label style = {{visibility: 'hidden'}} for="exampleInputEmail1">Purchase Indent number</label>
                            <input style = {{visibility: 'hidden'}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
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
