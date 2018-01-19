import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeState } from '../../ducks/reducer'

class Redux extends Component {


    render() {

        return (
            <div className='Redux'>

            <h1>Redux</h1>
            {/* 43G */}
            <button onClick={() => this.props.changeState('What up?')}>Hey</button>
				<p>{ this.props.reduxState }</p>
            </div>
        )
    }
}

let outputActions = {
    changeState
}

// 43H
function mapStateToProps(state) {
    return state
}

export default connect( mapStateToProps, outputActions )(Redux)