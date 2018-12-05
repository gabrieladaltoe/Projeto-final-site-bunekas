import React, { Component } from 'react'
import { BrowserRouter } from "react-router-dom";
import { withRouter } from 'react-router'
import './index.css';
import Navbar from './components/navbar'
import Header from './components/header'
import Bonecas from './components/sectionbonecas'
import Voluntarios from './components/sectionvoluntarios'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <React.Fragment>  
        <Navbar />
        <Header />
        <Bonecas />
        <Voluntarios />
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
