import React, { Component } from 'react'
import { BrowserRouter } from "react-router-dom";
import { withRouter } from 'react-router'
import './index.css';
import Navbar from './components/navbar'
import Header from './components/header'

class App extends Component {
  render() {
    return (
      <React.Fragment>  
        <Navbar />
        <Header />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
