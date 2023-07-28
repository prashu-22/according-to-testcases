// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isLightMode: false,
    buttonText: 'Light Mode',
    className: 'inner-container',
  }

  changeButton = () => {
    const {isLightMode} = this.state
    if (isLightMode === true) {
      this.setState({
        isLightMode: false,
        buttonText: 'Dark Mode',
        className: 'inner-container-dark',
      })
    } else {
      this.setState({
        isLightMode: true,
        buttonText: 'Light Mode',
        className: 'inner-container',
      })
    }
  }

  render() {
    const {buttonText, className} = this.state
    return (
      <div className="main-container">
        <div className={className}>
          <h1>Click To Change Mode</h1>
          <button className="button" onClick={this.changeButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
