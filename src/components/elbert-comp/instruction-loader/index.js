import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actions from '../../api/actions/misc'

class InstructionLoader extends React.Component {
  componentWillReceiveProps(props) {
    this.checkInstructions(props)
  }

  componentWillMount() {
    this.checkInstructions(this.props)
  }

  checkInstructions({sim : {instructionsShown}, page, actions}) {
    if (!~instructionsShown.indexOf(page)) {
      actions.showInstructions(page)
    }
  }

  render () {
    return null
  }
}

export default connect(
  state=>({sim: state.sim}),
  dispatch=>({actions: bindActionCreators(actions, dispatch)})
)(InstructionLoader)