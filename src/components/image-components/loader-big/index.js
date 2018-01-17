import React from 'react'
import './style.scss'
import loaderbig from './loader_large.gif'


const LoaderBig = () => (
  <div className="loader-big-wrapper">
    <img src={loaderbig} className="big-loader" />
  </div>
)

export default LoaderBig
