import React, { Component } from 'react';
import './style.scss';


class Button extends Component {
    render() {

      return (
        <div className="button">
            <button className="normal btn">Context</button>
            <button className="go-btn btn">Context</button>
            <button className="unactive btn">Context</button>
            
        </div>
      );
    }
  }
  
  export default Button;
  
