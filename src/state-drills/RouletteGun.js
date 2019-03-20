import React, { Component } from 'react';

class RouletteGun extends Component {
    state = {
        chamber: null,
        spinningTheChamber: false,
    }
    
    handleClick = () => {
        this.setState({
            spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
            this.setState({
                spinningTheChamber: false,
                chamber: Math.ceil(Math.random()* 8),
        })}, 2000)
    }

    componentWillUnmount = () => {
        clearTimeout(this.timeout)
    }

    renderDisplay() {
        if (this.state.spinningTheChamber) {
          return 'spinning the chamber and pulling the trigger! ...'
        } else if (this.state.chamber === this.props.bulletInChamber) {
          return 'BANG!!!!!'
        } else {
          return 'you\'re safe!'
        }
      }

      render() {
        return (
          <div className='RouletteGun'>
            <p>{this.renderDisplay()}</p>
            <button onClick={this.handleClick}>
              Pull the trigger!
            </button>
          </div>
        )
      }
}

export default RouletteGun

