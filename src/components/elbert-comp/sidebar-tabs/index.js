import './style.scss'
import React from 'react'
import {Link} from 'react-router'

const SidebarTabs = ({children, links, size=3, sidebarChildren=null})=>{
  return (
    <div className="container sidebar-tabs">
      <div className="columns col-gapless">
        <div className={`column col-${size} sidebar-tabs-links`}>
          {Object.keys(links).map((href, index)=><Link to={href} key={href} activeClassName="active">{links[href]}</Link>)}
          {sidebarChildren}
        </div>
        <div className={`column col-${12-size}`}>{children}</div>
      </div>
    </div>
  )
}

export default SidebarTabs
