import './style.scss'

import React, {Component} from 'react'
import classNames from 'classnames'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts'
import * as constants from '../../../api/constants'
import Tabs from '../../../components/tabs'

function CustomizedLabel({x, y, stroke}) {
  return <text x={x} y={y} dy={-4} fill={stroke} fontSize={8} textAnchor="middle"></text>
}

export default class Chart extends Component {
  constructor(props) {
    super(props)
    this.metricNames = this.props.metrics || Object.keys(constants.METRIC_NAMES)
    this.state = {
      activeTab: this.metricNames[0]
    }
  }
  render(){
    const {channelName, data, title} = this.props
    return (
      <div className="area-chart-container">
        <div className="header-container">
          <h3>{title || 'Over time'}</h3>
          {/* <p>The number of people your posts were served too.</p> */}
          <Tabs>
            {this.metricNames.map((metricName, index)=>{
              const metric = constants.METRIC_NAMES[metricName]
              return (
                <a
                  key={index}
                  href="#"
                  onClick={()=>this.setState({activeTab: metricName})}
                  className={classNames('tab-item',{active: this.state.activeTab === metricName})}>
                  {metric[channelName]}
                </a>
              )
            })}
          </Tabs>
        </div>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart width={600} height={300} data={data[this.state.activeTab]}
              margin={{top: 40, right: 30, left: 0, bottom: 0}}>
              <XAxis dataKey="date" axisLine={false} label={<CustomizedLabel />}/>
              <YAxis dataKey="count" axisLine={false} tickLine={false}/>
              <Area type='linear' dataKey='count' stroke={constants.COLORS[channelName]} fill={constants.COLORS[channelName]} padding={{ left: 0 }}/>
              <CartesianGrid vertical={false}/>
              <Tooltip/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    )
  }
}
