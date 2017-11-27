import React, {Component} from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'
import * as constants from '../../../api/constants'
import InstructionBtn from '../../instruction-btn'
import assign from 'assign-deep'
import strScore from './str-score'

class ChannelPopout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayedKeywords: [],
      activeKeyword: 0,
      showNewAudience: null,
      willNameAudience: false
    }
  }
  getKeywords(){
    return (e)=>{
      const keyword = e.target.value

      if (keyword.length < 3) {
        this.setState({displayedKeywords: []})
        return
      }

      if (this.keywordsTimeout) {
        window.clearTimeout(this.keywordsTimeout)
      }

      this.keywordsTimeout = window.setTimeout(()=>{
        const words = new Set(this.props.scenario.keywords.map((noun)=>{
          const score = strScore(noun.toLowerCase(), keyword.toLowerCase())
          return {noun, score}
        }).filter(obj=>obj.score > 0.8).sort((a,b)=>b.score-a.score).map(obj=>obj.noun))

        if (!words.has(keyword))
          words.add(keyword)

        const obj = {displayedKeywords: Array.from(words)}

        this.setState(Object.assign(this.state, obj))
      },100)
    }
  }
  getPresetAudiences(){
    const {channelName, posts} = this.props
    const audiences = {}
    ;[...posts].reverse().forEach((post)=>{
      const audience = post.channels[channelName]
      if (audience.name) {
        audiences[audience.name] = assign({}, audience)
      }
    })
    return audiences
  }
  render(){
    const {post, channelName, edit, canEdit, close, index, tabIndex, hasBudget, remainingBudget} = this.props
    const {displayedKeywords} = this.state
    const audience = post.channels[channelName]
    const presetAudiences = this.getPresetAudiences()
    const willNameAudience = audience.name || this.state.willNameAudience
    const showNewAudience = this.state.showNewAudience !== null
    ? !!this.state.showNewAudience
    : audience.name === null || !presetAudiences[audience.name]

    let keywordInput = null

    return (
      <div>
        <div className={`popout index${index}`}>
          <div className="form-horizontal">
            <div className="form-group">
              <div className="col-sm-7 text-left">
                <label className="form-label">Post on {constants.CHANNEL_NAMES[channelName]}:</label>
              </div>
              <div className="col-sm-5 text-right">
                <div className="btn-group">
                  <button disabled={!canEdit}
                    className={classNames('btn',{'btn-primary': audience.isActive})}
                    onClick={edit(`channels.${channelName}.isActive`,true)}
                    tabIndex={tabIndex}>
                    Yes
                  </button>
                  <button
                    tabIndex={tabIndex}
                    disabled={!canEdit}
                    className={classNames('btn',{'btn-primary': !audience.isActive})}
                    onClick={edit(`channels.${channelName}.isActive`,false)}>
                    No
                  </button>
                </div>
              </div>
            </div>

            {(audience.isActive && hasBudget) && (
              <div className="form-group">
                <div className="col-sm-7 text-left">
                  <label className="form-label">Promote:</label>
                </div>
                <div className="col-sm-5 text-right pos-relative">
                  <div className="btn-group">
                    <button
                      tabIndex={tabIndex}
                      disabled={!canEdit}
                      className={classNames('btn',{'btn-primary': audience.isPromoted})}
                      onClick={edit(`channels.${channelName}.isPromoted`,true)}>
                      Yes
                    </button>
                    <button
                      tabIndex={tabIndex}
                      disabled={!canEdit}
                      className={classNames('btn',{'btn-primary': !audience.isPromoted})}
                      onClick={edit(`channels.${channelName}.isPromoted`,false)}>
                      No
                    </button>
                  </div>
                </div>
              </div>
            )}

            {(audience.isActive && !hasBudget) && (
              <p style={{textAlign: 'center'}}><small>You cannot promote because you do not have any budget left.</small></p>
            )}

            {audience.isActive && audience.isPromoted && (
              <div>
                <div className="tab tab-block">
                  <a
                    tabIndex={tabIndex}
                    href="#"
                    onClick={()=>this.setState({showNewAudience: true})}
                    className={classNames('tab-item',{active: showNewAudience})}>
                    Create New Audience
                  </a>
                  <a
                    tabIndex={tabIndex}
                    href="#"
                    onClick={()=>this.setState({showNewAudience: false})}
                    className={classNames('tab-item',{active: !showNewAudience})}>
                    Use a Saved Audience
                  </a>
                </div>
                <br/>
                {!showNewAudience && (
                  <div>
                    <select
                      tabIndex={tabIndex}
                      className="form-select col-sm-12"
                      defaultValue={audience.name}
                      onChange={(e)=>{
                        if (presetAudiences[e.target.value])
                        edit(`channels.${channelName}`, assign({}, presetAudiences[e.target.value]))()
                      }}>
                      <option value={null}>{constants.CHANNEL_NAMES[channelName]} audiences:</option>
                      {Object.keys(presetAudiences).map((name, index)=>{
                        return (<option value={name} key={name}>{name}</option>)
                      })}
                    </select>
                  </div>
                )}
                {showNewAudience && (
                  <div>
                    <div className="form-group">
                      <div className="col-sm-3 text-right">
                        <label className="form-label">Age:</label>
                      </div>
                      <div className="col-sm-9 text-left">
                        <div>
                          <input
                            tabIndex={tabIndex}
                            disabled={!canEdit}
                            className="form-input col-sm-4 float-right"
                            type="number"
                            placeholder="Max"
                            min="0"
                            max="120"
                            defaultValue={audience.ageGroup.max}
                            onChange={edit(`channels.${channelName}.ageGroup.max`)}/>
                          <span className="float-right col-sm-1 text-center">{'‐'}</span>
                          <input
                            tabIndex={tabIndex}
                            disabled={!canEdit}
                            className="form-input col-sm-4 float-right"
                            type="number"
                            placeholder="Min"
                            min="0"
                            max="120"
                            defaultValue={audience.ageGroup.min}
                            onChange={edit(`channels.${channelName}.ageGroup.min`)}/>
                        </div>
                      </div>
                    </div>
                    <div className="form-group" style={{position: 'relative'}}>
                      <div className="col-sm-3 text-right">
                        <label className="form-label">Gender:</label>
                      </div>
                      <div className="col-sm-9 text-left">
                        <div className="btn-group float-right">
                          <button
                            tabIndex={tabIndex}
                            disabled={!canEdit}
                            className={classNames('btn',{'btn-primary':audience.gender === 'all'})}
                            onClick={edit(`channels.${channelName}.gender`,'all')}>
                            All
                          </button>
                          <button
                            tabIndex={tabIndex}
                            disabled={!canEdit}
                            className={classNames('btn',{'btn-primary':audience.gender === 'male'})}
                            onClick={edit(`channels.${channelName}.gender`,'male')}>
                            Men
                          </button>
                          <button
                            tabIndex={tabIndex}
                            disabled={!canEdit}
                            className={classNames('btn',{'btn-primary':audience.gender === 'female'})}
                            onClick={edit(`channels.${channelName}.gender`,'female')}>
                            Women
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="form-group" style={{zIndex: 1000, position: 'relative'}}>
                      <div className="col-sm-3 text-right">
                        <label className="form-label">Interests:</label>
                      </div>
                      <div className="col-sm-9 text-right">
                        <div className="form-autocomplete col-sm-10 float-right">
                          <div className="form-autocomplete-input text-left">
                            {
                              audience.keywords.map((keyword,i)=>{
                                return (
                                  <div className="chip-sm" key={i}>
                                    <span className="chip-name">{keyword}</span>
                                    {
                                      canEdit
                                      ? (<button tabIndex={tabIndex} className="btn btn-clear" onClick={()=>{
                                        let arr = audience.keywords.slice()
                                        arr.splice(i,1)
                                        edit(`channels.${channelName}.keywords`,arr)()
                                      }}></button>)
                                      :null
                                    }
                                  </div>
                                )
                              })
                            }
                            {canEdit && (
                              <form onSubmit={(e)=>{
                                e.preventDefault()
                                const keyword = this.state.displayedKeywords[this.state.activeKeyword]
                                if (!this.state.displayedKeywords[this.state.activeKeyword]) return

                                keywordInput.value = ''
                                let arr = audience.keywords.slice()
                                arr.push(keyword)
                                edit(`channels.${channelName}.keywords`,arr)()
                                this.setState({
                                  displayedKeywords: [],
                                  activeKeyword: 0,
                                })
                              }}>
                                <input tabIndex={tabIndex} className="form-input col-sm-12" ref={el=>keywordInput = el}
                                  onInput={this.getKeywords().bind(this)}
                                  type="text" placeholder="Search..."/>
                              </form>
                            )}
                          </div>
                          {(displayedKeywords && displayedKeywords.length > 0) && (
                            <ul className="form-autocomplete-list text-left">
                              {displayedKeywords.map((keyword,i)=>{
                                return (
                                  <li tabIndex={tabIndex} role="button" className={classNames('form-autocomplete-item', {active: this.state.activeKeyword === i})} key={i} onClick={()=>{
                                    keywordInput.value = ''
                                    let arr = audience.keywords.slice()
                                    arr.push(keyword)
                                    edit(`channels.${channelName}.keywords`,arr)()
                                    this.setState({
                                      displayedKeywords: [],
                                      activeKeyword: 0
                                    })
                                  }}>
                                    <div className="chip hand">
                                      <div className="chip-content">
                                        {keyword}
                                      </div>
                                    </div>
                                  </li>
                                )
                              })}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="form-group" style={{marginTop: '10px', position: 'relative'}}>
                      <div className="col-sm-3 text-right">
                        <label className="form-label">Budget:</label>
                      </div>
                      <div className="col-sm-9 text-left">
                        <div className="input-group float-right">
                          <span className="input-group-addon">$</span>
                          <input
                            tabIndex={tabIndex}
                            disabled={!canEdit}
                            className="form-input"
                            type="number"
                            step="0.01"
                            min="1"
                            placeholder="$0.00"
                            max={remainingBudget}
                            defaultValue={audience.budget}
                            onChange={(e)=>{
                              let value = e.target.value
                              edit(`channels.${channelName}.budget`, value)()
                            }} />
                        </div>
                      </div>
                    </div>
                    <div className="separator"/>
                    <div className="form-group">
                      <div className="col-sm-7 text-left">
                        <label className="form-label">Save This Audience?</label>
                      </div>
                      <div className="col-sm-5 text-right pos-relative">
                        <div className="btn-group">
                          <button
                            tabIndex={tabIndex}
                            disabled={!canEdit}
                            className={classNames('btn',{'btn-primary': willNameAudience})}
                            onClick={()=>this.setState({willNameAudience: true})}>
                            Yes
                          </button>
                          <button
                            tabIndex={tabIndex}
                            disabled={!canEdit}
                            className={classNames('btn',{'btn-primary': !willNameAudience})}
                            onClick={()=>this.setState({willNameAudience: false})}>
                            No
                          </button>
                        </div>
                      </div>
                    </div>
                    {willNameAudience && (
                      <div className="form-group">
                        <div className="col-sm-5 text-left">
                          <label className="form-label">Audience Name:</label>
                        </div>
                        <div className="col-sm-7 text-right">
                          <input
                            tabIndex={tabIndex}
                            disabled={!canEdit}
                            className="form-input"
                            defaultValue={audience.name || ''}
                            onChange={edit(`channels.${channelName}.name`)} />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            <br/>
            <div>
              <div className="form-group">
                <div className="col-sm-5 text-left">
                  <InstructionBtn page="promotion">Instructions</InstructionBtn>
                </div>
                <div className="col-sm-7 text-right">
                  <button className="btn btn-primary btn-block" onClick={close} tabIndex={tabIndex}>Done</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state=>({posts: state.sim.posts})
)(ChannelPopout)
