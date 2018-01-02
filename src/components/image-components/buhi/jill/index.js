import React, { Component } from 'react';
import './style.scss';
import jill from './jill.svg';



class Jill extends Component {
  render() {

    return (
        <div className="jill-wrapper">
            <img src={jill} className="jill"/>
        </div>
    );
}
}

export default Jill;
