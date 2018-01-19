import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {getUsers} from '../../dummyinfo'

export default class Match extends Component {
    constructor() {
      super()
      this.state = {
        users: []
      }
    }
  
    componentDidMount() {

      let users = getUsers()
      this.setState({
        users: users // updating state with people data
      })
    }
  
    render() {
      const users = this.state.users.map((e, i) => {
        return (
          <div>
          {/*42J Check the URL*/}
           <Link to={`/match/${e.id}`}><h3>{e.name}</h3></Link> 
          </div>
          
  
        )
      })
      return (
        <div>
          <h1>This is the users component</h1>
          {users}
        </div>
      )
    }
  }