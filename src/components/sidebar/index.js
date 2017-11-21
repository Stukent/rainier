import './style.scss'

import React from 'react'
import StukentLogo from '../stukent-logo'
import MimicLogo from '../mimic-logo'

function Sidebar({children, productCode}) {
  return (
    <div className="app-sidebar">
      <div className="logo-box">
        <MimicLogo productCode={productCode}/>
      </div>
      {children}
      <div className="footer-box">
        <StukentLogo/>
      </div>
    </div>
  )
}

export default Sidebar
