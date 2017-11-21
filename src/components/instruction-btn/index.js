import './style.scss'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
// import * as actions from '../../api/actions/misc'

class InstructionBtn extends Component {
  render() {
    return (
      <button tabIndex={0} className="btn" onClick={()=>this.props.actions.showInstructions(this.props.page)}>
        <i className="fa fa-info-circle"></i> {this.props.children}
      </button>
    )
  }
}

export default connect(
  state=>({scenario: state.scenario, misc: state.misc}),
  dispatch=>({actions: bindActionCreators(actions, dispatch)})
)(InstructionBtn)
