import './style.scss'
import React, {Component} from 'react'
import classNames from 'classnames'
import Datetime from 'react-datetime'
import * as constants from '../../api/constants'
import moment from 'moment'
import assign from 'assign-deep'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Channel from './channel'
import Content from './content'
import InstructionBtn from '../instruction-btn'
import * as actions from '../../api/actions/sim'
import numeral from 'numeral'

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newPost: this.newBlankPost(),
      contentIsOpen: false,
      datePickerIsOpen: false,
      openChannel: null
    }
  }
  newBlankPost() {
    const channel = ()=>{
      return {
        name: null,
        budget: 1,
        isActive: false,
        isPromoted: false,
        ageGroup: {min: 13, max: 70},
        gender: 'all',
        income: {min: 0, max: 100},
        state: 'Idaho',
        keywords: []
      }
    }

    return {
      id: 'xxxxxxxxxxxxxxxx'.replace(/x/g, (c)=>(Math.random()*16|0).toString(16)),
      content: {
        productKey: '',
        selectionKey: '',
        time: +this.props.scenario.dates.currentDate.setHours(12),
        day: +this.props.sim.day,
        text: ''
      },
      channels: {
        facebook: channel(),
        twitter: channel(),
        instagram: channel(),
        pinterest: channel(),
        linkedin: channel(),
        youtube: channel()
      }
    }
  }
  render(){
    const props = this.props
    const {scenario, index, metrics, actions} = props
    const remainingBudget = metrics ? scenario.budget - metrics.cost.total : 0
    const hasBudget = true // @TODO remove this
    const post = this.props.post ? this.props.post : this.state.newPost
    const canSubmit = Object.keys(post.channels).map(channelName=>post.channels[channelName].isActive).filter(x=>x).length > 0

    const edit = (key, val)=>{
      key = key.split('.')
      return (e)=>{
        let patch = {}
        let obj = patch
        while(key.length > 1) {
          const index = key.shift()
          obj[index] = {}
          obj = obj[index]
        }

        if (val !== undefined) {
          obj[key[0]] = val
        } else {
          if (e.target.getAttribute('type') === 'checkbox')
            obj[key[0]] = e.target.checked
          if (e.target.getAttribute('type') === 'number')
            obj[key[0]] = Number(e.target.value)
          else
          obj[key[0]] = e.target.value
        }

        if (this.props.post) {
          actions.patchPost(post.id, patch)
        } else {
          this.setState({newPost: assign(this.state.newPost, patch)})
        }
      }
    }

    const openContent = ()=>this.setState({contentIsOpen: true})
    const closeContent = ()=>this.setState({contentIsOpen: false})
    const contentIsOpen = this.state.contentIsOpen
    const openDatePicker = ()=>this.setState({datePickerIsOpen: true})
    const closeDatePicker = ()=>this.setState({datePickerIsOpen: false})
    const datePickerIsOpen = this.state.datePickerIsOpen
    const isChannelOpen = channel=>this.state.openChannel === channel
    const openChannel = (channel, edit=()=>{})=>{
      const preppedEdit = edit(`channels.${channel}.isActive`, true)
        return ()=>{
          if (typeof preppedEdit === 'function') preppedEdit()
        this.setState({openChannel: channel})
      }
    }
    const closeChannel = (e)=>openChannel(null)()
    const removePost = ()=>actions.removePost(post.id)
    const commitPost = ()=>{
      actions.newPost(this.state.newPost)
      closeDatePicker()
      this.setState({newPost: this.newBlankPost()})
    }

    if (!this.props.post || this.props.active)
      return (
        <div onClick={this.props.onClick}>
          <ActivePost
            {...props}
            scenario={scenario}
            post={post}
            edit={edit}
            openContent={openContent}
            closeContent={closeContent}
            contentIsOpen={contentIsOpen}
            openDatePicker={openDatePicker}
            closeDatePicker={closeDatePicker}
            datePickerIsOpen={datePickerIsOpen}
            isChannelOpen={isChannelOpen}
            openChannel={openChannel}
            closeChannel={closeChannel}
            isPending={!this.props.post}
            commitPost={commitPost}
            removePost={removePost}
            hasBudget={hasBudget}
            remainingBudget={remainingBudget}
            canSubmit={canSubmit}
            canEdit={true}/>
        </div>
        )
    else
      return (
        <div onClick={this.props.onClick}>
          <InactivePost
            {...props}
            scenario={scenario}
            post={post}/>
        </div>
        )
  }
}

function ActivePost(props) {
  const {
    index,
    post,
    scenario,
    edit,
    openContent,
    contentIsOpen,
    openDatePicker,
    closeDatePicker,
    datePickerIsOpen,
    isChannelOpen,
    openChannel,
    closeChannel,
    posts,
    isPending,
    commitPost,
    removePost,
    canEdit,
    canSubmit,
    hasBudget
  } = props

  const placeholder = canEdit ? "What would you like to share?" : "This post has no text."
  const textareaChange = (e)=>{
    if (!canEdit) return
    e.target.style.height = 'auto'
    e.target.style.height = `${e.target.scrollHeight}px`
    edit('content.text', e.target.value)()
  }

  const {currentDate, nextDate} = scenario.dates
  const {selections} = scenario

  const cost = Object.keys(post.channels)
  .map(key=>post.channels[key])
  .map(post=>(post.isActive && post.isPromoted) ? Number(post.budget) : 0)
  .reduce((a,b)=>a+b,0)
  + (scenario.selections[post.content.selectionKey] || {cost: 0}).cost

  return (
    <div className="post active" tabIndex={index}>
      <div className="profile">
        <div className="picture" style={{
          backgroundImage: `url(https://d254z8v8fjnox4.cloudfront.net/imgs/scenario/${scenario.awsKey}/logo.png)`
        }}/>
        {scenario.title}
      </div>
      <div className="icons">
        {constants.CHANNELS.map((channelName, channelIndex)=>(
          <Channel {...props}
            isOpen={isChannelOpen(channelName)}
            open={openChannel(channelName, props.edit)}
            close={closeChannel}
            channelName={channelName}
            index={channelIndex}
            key={channelName}
            tabIndex={4 + channelIndex + index}/>))}
      </div>
      <div className="text">
        <textarea
          tabIndex={2 + index}
          key={post.id}
          disabled={!canEdit}
          placeholder={placeholder}
          defaultValue={post.content.text}
          onChange={textareaChange} />
      </div>
      <button className="float-right tooltip selection-wrapper" tabIndex={index + 3} onClick={canEdit && hasBudget?openContent:()=>{}} data-tooltip={canEdit && (hasBudget ? 'Select Attachment' : 'You have no more money.')}>
        {(selections[post.content.selectionKey]
          ? (
            <div
              className={classNames('selection-preview', {disabled: !canEdit || !hasBudget})}
              style={{
                backgroundImage:
                `url(//d254z8v8fjnox4.cloudfront.net/imgs/scenario/${scenario.awsKey}/selections/${selections[post.content.selectionKey].thumbnail.src})`
              }}/>
          )
          : (
            <div className="selection-preview" title="Select Attachment">
              <i className="fa fa-plus" aria-hidden="true"></i>
            </div>
          )
        )}
      </button>
      <div className="clearfix"></div>
      <div className="content-chooser-wrapper">
        {contentIsOpen && (<Content {...props}/>)}
      </div>
      <div className="footer">
        <div className="float-left">
          <InstructionBtn page="channels">Instructions</InstructionBtn>
        </div>
        <div className="date-picker-wrapper">
          <button className="btn text-right" onClick={openDatePicker}>
            <i className="fa fa-clock-o" aria-hidden="true" style={{marginRight: '10px'}}></i>
            {moment(new Date(post.content.time)).format('ddd, MMM Do YY, h:mm a')}
          </button>
          {datePickerIsOpen && (
            <div>
              <Datetime disabled={!canEdit} input={false} defaultValue={post.content.time} className="date-picker" isValidDate={(date)=>{
                if (!canEdit) return false

                const lowerBound = moment(currentDate).subtract(1,'d')
                const upperBound = moment(nextDate)

                return date.isAfter(lowerBound) && date.isBefore(upperBound)
              }} onChange={(momentObj)=>{
                if (!canEdit) return
                edit('content.time', +(momentObj.toDate()))()
              }} renderDay={(props, currentDate, selectedDate)=>{
                let date = currentDate.toDate()
                let postCount = (posts || []).map((post)=>{
                  return new Date(post.content.time)
                }).filter((time)=>{
                  return time.toDateString() === date.toDateString()
                }).length
                let badge = postCount > 0?postCount:undefined

                return (
                  <td {...props} data-badge={badge}>{ currentDate.date() }</td>
                )
              }}/>
              <div onClick={closeDatePicker} className="app-transparent-overlay"/>
            </div>
          )}
        </div>
        {isPending && (
          <span style={{position: 'relative', marginLeft: '10px'}}>
            <button
              className={`btn btn-primary ${canSubmit?'':'disabled tooltip tooltip-top'}`}
              data-tooltip={canSubmit?undefined:'Select a channel first.'}
              onClick={canSubmit && commitPost}>Schedule ({numeral(cost).format('$0,0.00')})</button>
          </span>
        )}
        {(canEdit && !isPending) && (
          <span style={{position: 'relative', marginLeft: '10px'}}>
            <button className="btn" onClick={removePost}>
              <i className="fa fa-times" aria-hidden="true"></i>
              {' '}
              Delete
            </button>
          </span>
        )}
      </div>
    </div>
  )
}

function InactivePost(props) {
  const {
    post,
    scenario,
    disabled
  } = props

  const {selections} = scenario
  const time = moment(new Date(post.content.time))

  const cost = Object.keys(post.channels)
  .map(key=>post.channels[key])
  .map(post=>(post.isActive && post.isPromoted) ? Number(post.budget) : 0)
  .reduce((a,b)=>a+b,0)
  + (scenario.selections[post.content.selectionKey] || {cost: 0}).cost

  return (
    <div className={classNames("post inactive", {disabled})} tabIndex={0}>
      {(selections[post.content.selectionKey]
        ? (
          <div className="selection-preview"
            style={{
              backgroundImage:
              `url(//d254z8v8fjnox4.cloudfront.net/imgs/scenario/${scenario.awsKey}/selections/${selections[post.content.selectionKey].thumbnail.src})`
            }}></div>
        )
        : (null)
      )}
      <div className="text">{post.content.text}</div>
      <div className="meta">
        {time.format('ddd, MMM Do YY, h:mm a')}
        {' '}
        <div className="chip chip-sm">{numeral(cost).format('$0,0.00')}</div>
        <div className="float-right">
          {
            constants.CHANNELS.filter((channel)=>{
              return post.channels[channel].isActive
            }).map((channel)=>{
              return (
                <i className={constants.ICONS[channel]} key={channel}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default connect(
  state=>({scenario: state.scenario, sim: state.sim, posts: state.sim.posts, metrics: state.sim.metrics}),
  dispatch=>({actions: bindActionCreators(actions, dispatch)})
)(Post)
