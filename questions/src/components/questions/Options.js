import React from 'react'

const onClick = () => {

}
class Options extends React.Component {

  constructor(props) {
    super(props)
    this.state = { value: '' }
  }
  onSumbitClick = () => {
    this.props.handleOptionAdd(this.state.value);
    this.setState({ value: '' })
  }
  onDeleteClick = e => {
    this.props.handleOptionDelete(e.target.value);
  }
  render() {
    const { providedOptions } = this.props
    const providedList = providedOptions.map((optn, index) =>
      <div key={index}>
        <input
          value={optn}
          disabled={true}
        />
        <button
          onClick={this.onDeleteClick}
          value={optn}
        >delete
        </button>
      </div>
    )
    return (
      <div>
        {providedList}
        <br /><br />
        <label>option 1</label>
        <input
          type="text"
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
        />
        <br /><br />
        <button
          onClick={this.onSumbitClick}
          disabled={!this.state.value}
        >Add
        </button>
      </div>
    )
  }
}

export default Options