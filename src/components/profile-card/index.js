import './style.scss'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../api/actions/user'
import * as constants from '../../api/constants'

class ProfileCard extends Component {
  constructor(props){
    super(props)
    this.state = { open: false }
  }
  componentDidMount(){
    this.props.actions.getUser()
  }
  render() {
    const {user} = this.props

    const logout = ()=>{
      window.location.href = `/logout`
    }

    if (!user) return null
    return (
      <div>
        <div
          className="header-profile"
          onClick={()=>{
            this.setState({open: true})
          }}
          data-break="col3T0 col3R0" >
          <span className="title">{ user.name }</span>
          <img src={ user.picture } alt="Profile" data-pos="R0 T0 h16"/>
        </div>
        {(this.state.open?(
          <div className="app-transparent-overlay" style={{
            zIndex: '999999999997'
          }} onClick={()=>{
            this.setState({open: false})
          }}></div>
        ):null)}
        <div
          className={`profile-card ${this.state.open?'visible':''}`}
          data-pos="T1 R1 W10 H14"
          data-break="col3T0 col3R0">
          <div className="border" data-pos="T0 L0 R0 H3"></div>
          <img src={ user.picture } alt="Profile" data-pos="l8 cx T1 H3 W3"></img>
          <div data-pos="T5 L1 R1">
            { user.name }
          </div>
          <div data-pos="B3 L1 R1">
            <div className="btn-group btn-group-block btn-group-vertical">
              <a href={constants.DONALDSON_ORIGIN} className="btn btn-block">Go Home</a>
            </div>
          </div>
          <button className="btn btn-primary" data-pos="L1 B1 W8" onClick={logout}>Log Out</button>
        </div>
      </div>
    )
  }
}

export default connect(
  state=>({user: state.user}),
  dispatch=>({actions: bindActionCreators(actions, dispatch)})
)(ProfileCard)
