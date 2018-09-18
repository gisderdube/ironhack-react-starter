import React from 'react'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { observer } from 'mobx-react'

import Auth from './Auth'
import Home from './Home'
import Navigation from './Navigation'
import Profile from './Profile'
import NotFound from './NotFound'
import api from './utils/api'
import UserStore from './Store/User'

@observer
class Application extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}

        this._setUser = () => {}
        this._resetUser = () => {}
    }

    componentDidMount() {
        UserStore.setUser()
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation user={this.state.user} />
                    <Switch>
                        <Route exact path="/" render={() => <Home user={this.state.user} />} />
                        <Route exact path="/profile" render={() => <Profile user={this.state.user} />} />
                        <Route
                            path="/auth"
                            render={() => <Auth setUser={this._setUser} resetUser={this._resetUser} />}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }

    _resetUser() {
        this.setState({
            user: null,
        })
    }
}

export default Application
