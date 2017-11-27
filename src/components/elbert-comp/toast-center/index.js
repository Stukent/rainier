import './style.scss'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'
import {bindActionCreators} from 'redux'
import * as actions from '../../api/actions/misc'

class ToastCenter extends Component {
  render() {
    const {toasts, actions} = this.props
    return (
      <div className="app-toast-center">
        {toasts.map((toast, index)=>{
          return (
            <div key={index} className={classNames('toast',{
              'toast-primary': toast.type === 'primary',
              'toast-success': toast.type === 'success',
              'toast-danger': toast.type === 'danger'
            })}>
              {toast.icon && (
                <i className={`icon fa ${toast.icon}`}/>
              )}
              {toast.text}
              <button className="btn btn-clear float-right" onClick={()=>actions.hideToast(index)}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default connect(
  state=>({toasts: state.misc.toasts}),
  dispatch=>({actions: bindActionCreators(actions, dispatch)})
)(ToastCenter)
