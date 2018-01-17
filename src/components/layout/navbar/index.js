import React from 'react'
import styled from 'styled-components'

import { NavLink } from 'react-router-dom'
import { Stukent } from 'timp'

import './style.scss'

const Navbar = () => {
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
          <NavLink to="/"><Stukent /></NavLink>
        </div>
        <ul>
          <Item><NavLink to="/typefaces">Typefaces</NavLink></Item>
          <Item><NavLink to="/colors">Colors</NavLink></Item>
          <Item><NavLink to="/alerts">Alerts</NavLink></Item>
          <Item><NavLink to="/navigation">Navigation</NavLink></Item>
          <Item><NavLink to="/graphics">Graphics</NavLink></Item>
          <Item><NavLink to="/widgets">Widgets</NavLink></Item>
        </ul>

      </nav>
    </div>
  )
}

export default Navbar

