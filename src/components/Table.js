import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <div className='container mt-5 offset-3'>

                <div className = 'row'>
                    <form>
                        <input className='form-control'></input>
                    </form>
                    <button className = 'btn btn-success ml-2'>
                        Submit
                    </button>
                </div>

                <h1 className='mt-2'> Hello, my name is {this.props.name} </h1>

            </div>
        );
    }
}

export default Table;
