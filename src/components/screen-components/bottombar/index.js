import React, { Component } from 'react';
import './style.scss';
import hint from './hints.svg';
import note from './note.svg';
import logo from './stukent.svg';


class Bottombar extends Component {
    render() {

      return (
        <div className="topbar">
            <div className="logobox">
                <img src={hint} />
            </div>
            <img src={note} className="note"/>
            <img src={logo} className="logo"/>
        </div>
      );
    }
  }
  
  export default Bottombar;
  
