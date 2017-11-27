import React from 'react'

import definitions from './definitions'
import "./style.scss"

export default ({tip, tipKey}) => {
  const toolTip = tip ? tip : definitions[tipKey]
  return <span
   data-tooltip=""
   aria-haspopup="true"
   className="has-tip"
   data-disable-hover="false"
   style={{zIndex: "5"}}
   title={toolTip}
   >
    <i className="fa fa-question-circle"/>
   </span>

}