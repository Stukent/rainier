import React, { Component } from 'react';
import './style.scss';


class Accordion extends Component {
    render() {

        function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked.');
          }

      return (
        <div className="accordion-wrapper">
            <button className="accordion" onClick={handleClick}> Section 1 </button>
            <div className="panel">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <button className="accordion">Section 2</button>
            <div className="panel">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <button className="accordion">Section 3</button>
            <div className="panel">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>                                  
        </div>
      );
    }
  }

  export default Accordion;
