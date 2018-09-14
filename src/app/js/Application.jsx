import React from 'react'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Auth from './Auth'
import NotFound from './NotFound'
import api from './utils/api'

class Application extends React.Component {
    componentDidMount() {
        api.get('/api/protected')
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err.description)
            })
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/auth" component={Auth} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Application
