import React, { Component } from 'react'

export default class Button extends Component {

    clicked() {
        alert("Saved as draft");
      }

    clicked2() {
        alert ("Form Submitted")
    }

    render() {
        return (
            <div className="row">
                <div className='col-md-2'>

                </div>
                <div className='col-md-9'>
                    <div className="row">
                        <div className="col-md-6">
                            <button  onClick = {this.clicked} style={{ marginTop: '40px', backgroundColor: "orange", color: "white", borderRadius: "35px", paddingLeft: '60px', paddingRight: '60px', paddingTop: '10px', paddingBottom: '10px', borderColor: "oran" }}>Save as Draft</button>

                        </div>
                        <div className="col-md-6">
                            <button className="ml-5" onClick = {this.clicked2} style={{ marginTop: '40px', backgroundColor: "orange", color: "white", borderRadius: "35px", paddingLeft: '60px', paddingRight: '60px', paddingTop: '10px', paddingBottom: '10px' }}>Send</button>

                        </div>
                        <div className="col-md-6">
                            <button className="ml-5" style={{ marginTop: '40px', backgroundColor: "orange", color: "white", borderRadius: "35px", paddingLeft: '60px', paddingRight: '60px', visibility: 'hidden', paddingTop: '10px', paddingBottom: '10px' }}>Send</button>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
