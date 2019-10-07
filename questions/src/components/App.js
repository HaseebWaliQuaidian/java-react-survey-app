import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import QuestionsList from './questions/QuestionsList'
import CreateQuestion from './questions/CreateQuestion'
import Header from './Header'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/questions" component={QuestionsList} />
          <Route path="/createquestion" component={CreateQuestion} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;