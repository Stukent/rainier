import React, { Component } from 'react';
import './style.scss';


class Dropdown extends Component {
    render() {

      return (
        <div className="dropdowns">
            <div className="dropdown">
                <div className="dropbtn">Dropdown</div><span className="down"></span>
                    <ul className="dropdown-content">
                        <li><a href="#">item</a></li>
                        <li><a href="#">item</a></li>
                        <li><a href="#">item</a></li>
                        <li><a href="#">item</a></li>  
                    </ul>
            </div>                                   
        </div>
      );
    }
  }
  
  export default Dropdown;
  
