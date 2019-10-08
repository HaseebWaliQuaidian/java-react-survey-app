import React, { useEffect, useState } from 'react'
import Select from 'react-select';

import Options from './Options'
import { postQuestion } from './api/question'

const questionTypes = [
  { value: 1, label: 'Simple Text' },
  { value: 2, label: 'Multiple Choice' },
  { value: 3, label: 'Single Select' }
]

const CreateQuestion = () => {
  const [selectedOption, setSelectedOption,] = useState('');
  const [questionText, setQuestionText] = useState('')
  const [providedOptions, setProvidedOptions] = useState([]);

  const onSelectChange = ({ value }) => setSelectedOption(value);

  const handleOptionAdd = option => setProvidedOptions([...providedOptions, option]);

  const handleOptionDelete = option => setProvidedOptions(providedOptions.filter(item => item !== option));

  const onSubmit = () => {
    const postBody = {
      title: questionText,
      options: providedOptions
    }
    postQuestion(postBody).then(data => { setSelectedOption(""); setQuestionText(''); setProvidedOptions([]) })
  }
  const renderOptions = () => {
    if (selectedOption === 2 || selectedOption === 3) {
      return <Options
        providedOptions={providedOptions}
        handleOptionAdd={handleOptionAdd}
        handleOptionDelete={handleOptionDelete}
      />
    }
  }

  const checkSubmitEnable = () => {
    if (!questionText) return true
    if (selectedOption === 1) return false;
    if (selectedOption !== 1 && providedOptions.length > 0) return false
    return true
  }
  return (
    <div>
      <label>Enter your question here </label>
      <input
        type="text"
        value={questionText}
        onChange={e => setQuestionText(e.target.value)
        }>
      </input> <br /> <br />
      <Select
        options={questionTypes}
        onChange={onSelectChange}
      />
      {renderOptions()}
      <br /><br />
      <button
        disabled={checkSubmitEnable()}
        onClick={onSubmit}
      >Sumbit
        </button>
    </div >)
}




export default CreateQuestion