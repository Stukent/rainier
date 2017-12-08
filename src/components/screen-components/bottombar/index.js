import React, { Component } from 'react';
import './style.scss';
import ms from './mimic-logo.svg';

import ProfileDemo from '../profiledemo';


class DemoBottombar extends Component {
    render() {

      return (
        <div className="bottombar">
            <img src={ms} className="logo"/>
            <ProfileDemo/>
        </div>
      );
    }
  }
  
  export default DemoBottombar;
  
