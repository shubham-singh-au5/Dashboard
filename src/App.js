import React, { Component } from 'react';
import ValidatedLoginForm from './components/ValidatedLoginForm';
// import Dashboard from './components/Dashboard';
import './styles.css'

export default class App extends Component {
  render() {
    return (
      <div className = 'App'>
        < ValidatedLoginForm />
        {/* < Dashboard /> */}
      </div>
    )
  }
}
