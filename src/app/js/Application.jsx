import React from 'react'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Auth from './Auth'
import NotFound from './NotFound'

class Application extends React.Component {
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
