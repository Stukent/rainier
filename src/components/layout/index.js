import React, { Component } from 'react';
import './style.scss';
import Navbar from './navbar';
import Footer from './footer/';



class Layout extends Component {
  render() {

    return (
        <div>
            <Navbar />

            {this.props.children}

            <Footer />
        </div>
    );
}
}

export default Layout;
