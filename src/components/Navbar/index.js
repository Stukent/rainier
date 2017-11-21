import React, { Component } from 'react';
import './style.scss';
import styled from 'styled-components';


class Navbar extends Component {
    render() {

      const Item = styled.li`
      /* This renders the buttons above... Edit me! */
      display: inline-block;
      padding: 0.2rem 0;
      margin: 0.5rem 0rem;
      width: 8rem;
      color: #62616C;
    `


      return (
        <div className="navbar">
          <nav>
              <ul>
              <Item>item</Item>
              <Item>item</Item>
              <Item>item</Item>

              </ul>
          </nav>
        </div>
      );
    }
  }
  
  export default Navbar;
  