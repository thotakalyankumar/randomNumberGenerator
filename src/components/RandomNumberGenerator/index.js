import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGenerateRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-Container">
          <h1 className="heading">Random Numbers</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.onGenerateRandomNumber}
          >
            Generate
          </button>
          <p className="random-number">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
