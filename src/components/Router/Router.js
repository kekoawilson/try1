import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nested from '../Nested/Nested'
import Axios from '../Axios/Axios'
import Redux from '../Redux/Redux'
import Home from '../Home/Home'
import Match from '../Match/Match'
import User from '../Match/User'

export default (
    <div>
        <Switch>
            <Route path='/nested' component={Nested}/>
            <Route path='/axios' component={Axios}/>
            <Route path='/redux' component={Redux}/>
            <Route path='/match' component={Match}/>
            <Route path='/match/:id' component={User}/>
            <Route exact path='/' component={Home}/>
        </Switch>
    
    
    </div>
)