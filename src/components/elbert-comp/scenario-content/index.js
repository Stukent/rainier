import './style.scss'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import marked from 'marked'
import classNames from 'classnames'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})

class ScenarioContent extends Component{
  constructor(props){
    super(props)
    this.state = {
      activeTab: null,
    }
  }
  componentWillReceiveProps(){
    this.setState({activeTab: null})
  }
  render(){
    const md = this.props.scenario.content[this.props.page]
    if (typeof md === 'object') {
      const activeTab = this.state.activeTab || 0
      const activeKey = Object.keys(md.tabs)[activeTab]
      return (
        <div>
          <div tabIndex={0} dangerouslySetInnerHTML={{__html: marked(md.header.split('\n\t').join('\n')) }}/>
          <div className="tab tab-block">
            {
              Object.keys(md.tabs).map((key,index)=>{
                const onClick = ()=>{
                  this.setState({activeTab: index })
                }
                const active = index === activeTab
                return(
                  <a href="#" onClick={onClick} key={key} value={key} className={classNames("tab-item",{active})}>{key}</a>
                )
              })
            }
          </div>
          <div tabIndex={0} dangerouslySetInnerHTML={{__html: marked(md.tabs[activeKey].split('\n\t').join('\n')) }}/>
        </div>
      )
    } else if (typeof md === 'string') {
      return (
        <div tabIndex={0} dangerouslySetInnerHTML={{__html: marked(md.split('\n\t').join('\n')) }}/>
      )
    }
  }
}

export default connect(
  state=>({scenario: state.scenario})
)(ScenarioContent)
