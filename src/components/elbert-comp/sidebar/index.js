import './style.scss'
import logo from './mimic-logo.svg';
import React from 'react'

function Sidebar({children, productCode}) {

  return (
    <div className="app-sidebar">
      <div className="logo-box">
        <img src={logo} />
      </div>
      
      <div className="footer-box">
        
      </div>
    </div>
  )
}

export default Sidebar
