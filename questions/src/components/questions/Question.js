import React from 'react'

import './Question.css'

const Question = ({ title, children }) => {
  return (
    <div className="question" >
      <p>{title}</p>
      <br />
      {children}
    </div >
  )
}

export default Question