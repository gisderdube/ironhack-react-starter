import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import SignUp from './SignUp'
import SignIn from './SignIn'
import NotFound from '../NotFound'

class Auth extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/auth/sign-up" component={SignUp} />
                <Route exact path="/auth/sign-in" component={SignIn} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}

export default Auth
