import React, { Component } from 'react';
import './style.scss';
import loader from './app_loading.gif';



class Loader extends Component {
  render() {

    return (
        <div className="loader-small-wrapper">
            <img src={loader} className="small-loader"/>
        </div>
    );
}
}

export default Loader;
