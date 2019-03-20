import React, {Component} from 'react';

class Bomb extends Component {
    
    state = {
        count: 0
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            let newCount = this.state.count + 1
            this.setState({
                count: newCount
            })    
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    renderBomb() {
        if (this.state.count >= 8) {
            return 'Boom'
        }
        else if (this.state.count % 2 === 0) {
            return 'Tick'
        }
        else {
            return 'Tock'
        }

    }

render() {
    console.log(this.state.count)
    return <div><p>{this.renderBomb()}</p></div>

}}

export default Bomb;