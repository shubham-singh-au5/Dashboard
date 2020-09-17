import React, { Component } from 'react';


export default class NavBar extends Component {
    render() {
        return (
            <div className="row mt-4">
                <div className="col-md-2">

                </div>
                <div className="col-md-7">
                    <h3>Testlogo</h3>
                </div>
                <div className="col-md-3">
                    <i class="fa fa-bell-o" style = {{fontSize: '24px'}}></i>
                    <i class="fa fa-user ml-5" style = {{fontSize: '24px'}}></i>
                </div>
            </div>
        )
    }
}
