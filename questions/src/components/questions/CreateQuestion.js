import React from 'react'
import Select from 'react-select';

import Options from './Options'
import { postQuestion } from './api/question'

const questionTypes = [
  { value: 1, label: 'Simple Text' },
  { value: 2, label: 'Multiple Choice' },
  { value: 3, label: 'Single Select' }
]
const INIT_STATE = {
  selectedOption: '',
  providedOptions: [],
  questionText: ''
}
class CreateQuestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = INIT_STATE
  }
  onSelectChange = ({ value }) => {
    this.setState({
      selectedOption: value,
    })
  }
  handleOptionAdd = option =>
    this.setState({ providedOptions: [...this.state.providedOptions, option] });

  handleOptionDelete = option =>
    this.setState({
      providedOptions: this.state.providedOptions.filter(item => item !== option)
    });

  onSubmit = () => {
    const postBody = {
      title: this.state.questionText,
      options: this.state.providedOptions
    }
    postQuestion(postBody).then(
      this.setState(INIT_STATE)
    )
  }
  renderOptions() {
    if (this.state.selectedOption === 2 || this.state.selectedOption === 3) {
      return <Options
        providedOptions={this.state.providedOptions}
        handleOptionAdd={this.handleOptionAdd}
        handleOptionDelete={this.handleOptionDelete}
      />
    }
  }
  checkSubmitEnable = () => {
    if (!this.state.questionText) return true
    if (this.state.selectedOption === 1) return false;
    if (this.state.selectedOption !== 1 && this.state.providedOptions.length > 0) return false
    return true
  }
  render() {
    return (
      <div>
        <label>Enter your question here </label>
        <input
          type="text"
          value={this.state.questionText}
          onChange={e => this.setState({ questionText: e.target.value })
          }>
        </input> <br /> <br />
        <Select
          options={questionTypes}
          onChange={this.onSelectChange}
        />
        {this.renderOptions()}
        <br /><br />
        <button
          disabled={this.checkSubmitEnable()}
          onClick={this.onSubmit}
        >Sumbit
        </button>
      </div >)
  }
}

export default CreateQuestion