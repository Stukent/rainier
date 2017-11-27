import './style.scss'
import React from 'react'
import numeral from 'numeral'
import classNames from 'classnames'
import {LineChart, Line, Tooltip} from 'recharts'

export function Chart({data, total, label, percent}) {
  return (
    <div>
      <div className="weekly-metric">
        <div className="total">{numeral(total).format('0,0')}</div>
        <div className="text-label">{label}</div>
        <i className={classNames('fa',{'fa-caret-up':percent > 0, 'fa-caret-down':percent < 0})} aria-hidden="true"/>
        <div className="percent">{numeral(percent).format('0,0%')} from last week</div>
      </div>
      <div className="keys-box">
        <div className="key">
          <div className="this-week"></div><p>This week</p>
        </div>
        <div className="key">
          <div className="last-week"></div><p>Last week</p>
        </div>
      </div>
      <div className="line-chart">
        <LineChart width={330}
          height={110}
          data={data}>
          <Line type='linear'
            dataKey='This Week'
            stroke='#30a648'
            strokeWidth={2.2}
            dot={false}/>
          {(!!data[0]['Last Week']) && (
            <Line type='linear'
              dataKey='Last Week'
              stroke='#cccccc'
              strokeWidth={.8}
              dot={false}/>
          )}
          <Tooltip />
        </LineChart>
      </div>

    </div>
  )
}

export function Container({channelName, data, header, label, total, percent, children}){
  return (
     <div className="week-graph-container">
       <div className="container-box">
         <div className="header">
           {header}
           {/* <div className="fa fa-angle-right"></div> */}
         </div>
         <div className="total-box">
           <div className="total">{total}</div>
           <div className="total-text">Total {label}</div>
           <div className="last-week">
           </div>
         </div>
         {children}
       </div>
     </div>
  )
}

export function SparkLine({total, label, data, primaryColor}){
  return (
    <div className="sparkline-box">
      <div className="description-box">
        <div className="engage-total">{total}</div>
        <div className="engage-description">{label}</div>
      </div>
      <div className="spark-chart">
        <LineChart
          width={105}
          height={20}
          margin={{top:0}}
          data={data}>
          <Line type='linear'
            dataKey='This Week'
            stroke={primaryColor}
            strokeWidth={1.5}
            dot={false}/>
          <Line type='linear'
            dataKey='Last Week'
            stroke='#cccccc'
            strokeWidth={1.5}
            dot={false}/>
        </LineChart>
      </div>
    </div>
  )
}
