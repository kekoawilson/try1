import React, { Component } from 'react'
// 44C
import axios from 'axios'

class Axios extends Component {
    constructor() {
        super()

        this.state = {
            luke: {}
        }

    }

    // 44E
    componentDidMount() {
        // 44D
        axios.get('https://swapi.co/api/people/1/').then( res => {
           this.setState({
               luke: res.data
           })})
    }

    render() {

        return (
            <div className='Axios'>

            <h1>Axios</h1>
            <h2>{this.state.luke.name}</h2>
            <p>His name came from SWAPI</p>


            </div>
        )
    }
}


export default Axios