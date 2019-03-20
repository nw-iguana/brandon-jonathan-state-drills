import React, { Component } from 'react';

class HelloWorld extends Component {
    state = {
        who: 'world',
    }

    buttonclick1 = () => {
        this.setState({
            who: 'Friend!',
        })
    }

    buttonclick2 = () => {
        this.setState({
            who: 'React!',
        })
    }

    buttonclick3 = () => {
        this.setState({
            who: 'World!',
        })
    }

    render() {
        return <div> 
            <p>Hello, {this.state.who}</p>
            <button onClick={this.buttonclick1}>Friend</button>
            <button onClick={this.buttonclick2}>React</button>
            <button onClick={this.buttonclick3}>World</button>
        </div>
    }
}

export default HelloWorld;