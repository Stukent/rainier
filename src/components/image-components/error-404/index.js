import React from 'react'
import './style.scss'
import error404 from './404-error.gif'


const Error404 = () => (
  <div className="error-wrapper">
    <img src={error404} className="error" />
  </div>
)

export default Error404
