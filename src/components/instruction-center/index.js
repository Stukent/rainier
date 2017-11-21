import './style.scss'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../api/actions/misc'
import {seenInstruction} from '../../api/actions/sim'
import ScenarioContent from '../scenario-content'

class InstructionCenter extends Component {
  render() {
    const page = this.props.misc.instructionPage
    const onClose = () => {
      this.props.actions.hideInstructions()
      this.props.actions.seenInstruction(page)
    }

    return (
      <div className="app-instruction-center-wrap" onClick={onClose}>
        <div className="app-instruction-center" onClick={e=>e.stopPropagation()}>
          <button className="close tooltip tooltip-right" data-tooltip="Close" onClick={onClose}>
            <i className="fa fa-times"></i>
          </button>
          <div className="instruction-content-inner">
            {page && <ScenarioContent page={page}/>}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state=>({scenario: state.scenario, misc: state.misc}),
  dispatch=>({actions: bindActionCreators({...actions, seenInstruction}, dispatch)})
)(InstructionCenter)
