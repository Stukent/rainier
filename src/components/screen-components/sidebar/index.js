import React, { Component } from 'react';
import './style.scss';
import logo from './stukent.svg';
import mp from './w-mp.svg';
import ms from './ms-green.svg';



class Sidebar extends Component {
    render() {

      return (
        <div className="sidebar">
          <div className="logobox">
            <img src={logo} className="sidebar-logo"/>
            <img src={mp} className="mp-logo"/>
          </div>
          <div className="rounds">
            <span>Round 2 starts 09/12/18</span>
          </div>
          <div className="menu-links">
            {this.props.children}
          </div>

       </div>
      );
    }
  }
  
  export default Sidebar;
  
