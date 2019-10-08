import React, { useState, useEffect } from 'react';

import { getQuestion } from './api/question'
import Question from './Question'
import RadioAnswer from '../answer/RadioAnswer'
import TextAnswer from '../answer/TextAnswer'

export default function QuestionsList() {
  const [questions, setQuestions] = useState([]);

  const fetchQuestion = () => {
    getQuestion().then(data => setQuestions(data))
  }
  useEffect(() => fetchQuestion(), []);

  const handleSubmit = e => {
    const answers = questions.map(
      q => ({ "questionId": q.id, "answer": q.answer })
    )
  }

  const handleAnswerChange = ({ answer, questionId }) => {
    const questionUpdated = questions.map(q => {
      if (q.id === questionId) {
        return { ...q, answer: answer }
      }
      return q;
    })
    setQuestions(questionUpdated)
  }

  const renderAnswer = question => {
    if (question.type !== 'text')
      return <RadioAnswer
        question={question}
        handleAnswerChange={handleAnswerChange}
      />
    else
      return <TextAnswer
        question={question}
        handleAnswerChange={handleAnswerChange}
      />
  }

  return (
    < div >
      {console.log('printing questions ', questions)}
      {
        questions.map(q =>
          <div key={q.id}>
            <Question
              title={q.title}
            >
              {renderAnswer(q)}
            </Question>
          </div>
        )
      }
      < button onClick={handleSubmit} > Submit</button >
    </div >
  )

}