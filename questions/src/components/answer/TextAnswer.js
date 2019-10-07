import React from 'react'


class Answer extends React.Component {

  render() {
    const { question: { id, answer }, handleAnswerChange } = this.props;
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
}

export default Answer