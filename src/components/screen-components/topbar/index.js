import React, { Component } from 'react';
import './style.scss';
import ms from './mimic-logo.svg';

import ProfileDemo from '../profiledemo';


class Topbar extends Component {
    render() {

      return (
        <div className="bottombar">
            <img src={ms} className="logo"/>
        </div>
      );
    }
  }
  
  export default Topbar;
  
