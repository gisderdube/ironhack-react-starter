import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import SignUp from './SignUp'
import SignIn from './SignIn'
import NotFound from '../NotFound'

class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }

        this._handleInputChange = this._handleInputChange.bind(this)
    }

    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/auth/sign-up"
                    render={() => (
                        <SignUp
                            handleInputChange={this._handleInputChange}
                            email={this.state.email}
                            password={this.state.password}
                        />
                    )}
                />
                <Route
                    exact
                    path="/auth/sign-in"
                    render={() => (
                        <SignIn
                            handleInputChange={this._handleInputChange}
                            email={this.state.email}
                            password={this.state.password}
                        />
                    )}
                />
                <Route component={NotFound} />
            </Switch>
        )
    }

    _handleInputChange(key, newValue) {
        this.setState({
            [key]: newValue,
        })
    }
}

export default Auth
