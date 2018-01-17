import React from 'react'
import './style.scss'
import emaillogo from './company_logo.png'


const EmailLogo = () => (
  <div className="email-logo-wrapper">
    <img src={emaillogo} className="emaillogo" />
  </div>
)

export default EmailLogo

