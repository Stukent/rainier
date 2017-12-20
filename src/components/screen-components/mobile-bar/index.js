import React, { Component } from 'react';
import './style.scss';
import dropmenu from './dropmenu.svg';





class MobileBar extends Component {
    render() {

      return (
        <div className="mobile-bar-wrapper">
            <div className="queried-bar">
                <div className="logobox">
                    <img src={dropmenu} className="dropmenu"/>
                </div>
            </div>
       </div>
      );
    }
  }
  
  export default MobileBar;
  
