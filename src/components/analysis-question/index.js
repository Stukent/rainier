import React from 'react'

import './style.scss'

const AnalysisQuestion = (props) => {
  const {question, answer='', readOnly} = props

  const onChange = ({target: {value}}) => {
    const onChange = props.onChange
    if (typeof onChange !== 'function') return

    onChange(value)
  }

  return <div className="analysis-question">
    <div className="question-text">{question}</div>
    <textarea readOnly={readOnly} value={answer} onChange={onChange} />
  </div>
}

export default AnalysisQuestion