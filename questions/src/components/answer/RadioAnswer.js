import React from 'react'


const RadioAnswer = ({ question: { options, id, answer }, handleAnswerChange }) => {
  return (
    <div>
      <br />
      {options.map(opt =>
        <div>
          <label>{opt.value}{' '}
            <input
              onChange={e => handleAnswerChange({ answer: e.target.value, questionId: id })}
              type="radio"
              name={opt.value}
              key={opt.id}
              value={opt.value}
              checked={opt.value === answer}
            />
          </label>
        </div>
      )}
    </div >)
}


export default RadioAnswer