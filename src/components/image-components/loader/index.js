import React from 'react'
import './style.scss'
import loader from './app_loading.gif'


const Loader = () => (
  <div className="loader-small-wrapper">
    <img src={loader} className="small-loader" />
  </div>
)

export default Loader
