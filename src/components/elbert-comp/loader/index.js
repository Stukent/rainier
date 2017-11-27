import './style.scss'

import React, {Component} from 'react'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showReset: false
    }
    this.timer = null
  }
  componentDidMount() {
    this.timer = setTimeout(()=>{
      this.setState({showReset: true})
    }, 1000 * 20)
  }
  componentWillUnmount() {
    clearTimeout(this.timer)
  }
  render() {
    return (
      <div className="app-loader">
        <div className="loading"></div>
        {this.state.showReset && (
          <div>
            <h4 style={{textAlign: 'center'}}>Still loading?</h4>
            <button className="btn btn-primary" onClick={()=>window.location.reload()}>Refresh This Page</button>
          </div>
        )}
      </div>
    )
  }
}
