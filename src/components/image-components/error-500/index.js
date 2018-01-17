import React from 'react'
import './style.scss'
import error500 from './500-error.gif'


const Error500 = () => (
  <div className="error-wrapper">
    <img src={error500} className="error" />
  </div>
)

export default Error500
