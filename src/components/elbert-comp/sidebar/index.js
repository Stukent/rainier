import './style.scss'

import React from 'react'


function Sidebar({children, productCode}) {
  return (
    <div className="app-sidebar">
      <div className="logo-box">
        
      </div>
      {children}
      <div className="footer-box">
        
      </div>
    </div>
  )
}

export default Sidebar
