import React from 'react'
import classNames from 'classnames'
import * as constants from '../../../api/constants'

import ChannelPopout from './popout'

function Channel(props) {
  const {post, channelName, isOpen, open, tabIndex} = props
  const classes = classNames('icon', {on: post.channels[channelName].isActive, active: isOpen})

  return (
    <div className={classes}>
      <button tabIndex={tabIndex} className="tooltip tooltip-top" data-tooltip={`Post to ${constants.CHANNEL_NAMES[channelName]}`} onClick={open} aria-pressed={post.channels[channelName].isActive?'true':'false'}><i className={constants.ICONS[channelName]}/></button>
      {isOpen && <ChannelPopout {...props}/>}
    </div>
  )
}

export default Channel
