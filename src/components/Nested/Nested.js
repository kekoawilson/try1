import React, { Component } from 'react'
import Functional from '../Functional/Functional'

class Nested extends Component {
    // 36I
    constructor() {

        super()
        // 36C
        this.state = {
            greeting: '',
            message: 'this message is passed by props'
        }
        // 37C
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        // 36D
        this.setState({
            greeting: 'Thank you for your donation.'
        })
    }
    // 37D
    clearMessage = () => this.setState({ greeting: '' })

    // 36F
    render() {
        // 36G
        return (
            <div className='Nested'>
                <p>{this.state.greeting}</p>
                {/* 36J */}
                <button onClick={this.handleClick}>Click this button</button>
                <button onClick={this.clearMessage}>Retract Donation</button>
                <Functional hey={this.state.message}/>
            </div>
        )
    }
}

// 37E-2
export default Nested