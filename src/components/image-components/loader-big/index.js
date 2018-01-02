import React, { Component } from 'react';
import './style.scss';
import loaderbig from './loader-large.gif';



class LoaderBig extends Component {
  render() {

    return (
        <div className="loader-big-wrapper">
            <img src={loaderbig} className="big-loader"/>
        </div>
    );
}
}

export default LoaderBig;
