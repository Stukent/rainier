import React from 'react'
import { NavLink } from 'react-router-dom'

import './style.scss'
import Intro from '../intro'

const Content = () => (
  <div className="content-intro">
    <Intro />
    <div className="sections">
      <div className="child-section">
        <NavLink to="/typefaces">Typefaces</NavLink>
      </div>

      <div className="child-section">
        <NavLink to="/colors">Colors</NavLink>
      </div>

      <div className="child-section">
        <NavLink to="/alerts">Alerts</NavLink>
      </div>

      <div className="child-section">
        <NavLink to="/navigation">Navigation</NavLink>
      </div>

      <div className="child-section">
        <NavLink to="/graphics">Graphics</NavLink>
      </div>

      <div className="child-section">
        <NavLink to="/widgets">Widgets</NavLink>
      </div>
    </div>
  </div>
)

export default Content
