import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import PurchaseIndent from './components/PurchaseIndent';
import SellerDetails from './components/SellerDetails';
import BuyerDetails from './components/BuyerDetails';
import TotalCost from './components/TotalCost';
import Product1 from './components/Product1'
import Product2 from './components/Product2';
import Product3 from './components/Product3';
import Button from './components/Button'


import './index.css';

class App extends Component {

  render() {

    return (
      <div>
        < NavBar />
        < PurchaseIndent />
        < SellerDetails />
        < BuyerDetails />
        < TotalCost />
        < Product1 />
        < Product2 />
        < Product3 />
        < Button />
      </div>
    )
  }
}

export default App;