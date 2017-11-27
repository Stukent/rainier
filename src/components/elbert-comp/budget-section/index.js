import './style.scss'
import React from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'
import numeral from 'numeral'

function BudgetSection({scenario, sim, metrics={cost:{total:0}}}) {
  if (!scenario || ! metrics) return null

  const remaining = scenario.budget - metrics.cost.total
  const budgetThisRound = scenario.budget / scenario.round
  const spent = sim.posts
  .filter(post=>post.content.day === sim.day)
  .map((post)=>{
    return Object.keys(post.channels)
    .map(key=>post.channels[key])
    .map(post=>(post.isActive && post.isPromoted) ? Number(post.budget) : 0)
    .reduce((a,b)=>a+b,0)
    + (scenario.selections[post.content.selectionKey] || {cost: 0}).cost
  }).reduce((a,b)=>a+b,0)

  return (
    <div className="budget-section">
      <div className={classNames('section',{red: budgetThisRound < spent})} title="This Round">
        {numeral(spent).format('$0,0.00')}
      </div>
      <div className={classNames('section',{red: budgetThisRound < spent})} title="Remaining">
        {numeral(budgetThisRound - spent).format('$0,0.00')}
      </div>
    </div>
  )
}

export default connect(
  state=>({scenario: state.scenario, metrics: state.sim.metrics, sim: state.sim})
)(BudgetSection)
