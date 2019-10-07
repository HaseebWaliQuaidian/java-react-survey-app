import React from 'react';

import { getQuestion } from './api/question'
import Question from './Question'
import RadioAnswer from '../answer/RadioAnswer'
import TextAnswer from '../answer/TextAnswer'

class QuestionsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    getQuestion().then(
      data => { this.setState({ questions: data }) }
    );
  }
  handleSubmit = e => {
    const answers = this.state.questions.map(
      q => ({ "questionId": q.id, "answer": q.answer })
    )
  }

  handleAnswerChange = ({ answer, questionId }) => {
    const { questions } = this.state;
    this.setState({
      questions: questions.map(q => {
        if (q.id === questionId) {
          return { ...q, answer: answer }
        }
        return q;
      })
    })
  }

  renderAnswer = question => {
    if (question.type !== 'text')
      return <RadioAnswer
        question={question}
        handleAnswerChange={this.handleAnswerChange}
      />
    else
      return <TextAnswer
        question={question}
        handleAnswerChange={this.handleAnswerChange}
      />

  }

  render() {
    const { questions } = this.state
    return (
      <div>
        {questions.map(q =>
          <div key={q.id}>
            <Question
              title={q.title}
            >
              {this.renderAnswer(q)}
            </Question>
          </div>
        )}
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )


  }
}

export default QuestionsList;