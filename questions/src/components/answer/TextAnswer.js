import React from 'react'

const TextAnswer = ({ question: { id, answer }, handleAnswerChange }) => {
  return (
    <div>
      <br />
      <input
        onChange={e => handleAnswerChange({ answer: e.target.value, questionId: id })}
        type="text"
        key={id}
        value={answer}
      />
    </div >)
}
export default TextAnswer


