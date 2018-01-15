import React, { Component } from 'react';
import './style.scss';
import styled from 'styled-components';
import Stukent from '../../image-components/stukent-brand/stukent/';
import {Link} from 'react-router-dom';


class Navbar extends Component {
    render() {

      const Item = styled.li`
      /* This renders the buttons above... Edit me! */
      display: inline-block;
      padding: 0.2rem 0;
      margin: 0.5rem 0rem;
      width: 8rem;
      color: #ffffff;
    `


      return (
        <div className="navbar">
          <nav>

            <div className="stukent-logo">
              <Link to="/"><Stukent/></Link>
            </div>
            <ul>
              <Item><Link to="/typefaces">Typefaces</Link></Item>
              <Item><Link to="/colors">Colors</Link></Item>
              <Item><Link to="/alerts">Alerts</Link></Item>
              <Item><Link to="/navigation">Navigation</Link></Item>
              <Item><Link to="/graphics">Graphics</Link></Item>
              <Item><Link to="/widgets">Widgets</Link></Item>
            </ul>

          </nav>
        </div>
      );
    }
  }
  
  export default Navbar;
  