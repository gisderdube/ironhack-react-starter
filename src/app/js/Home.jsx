import React from 'react'
import { observer } from 'mobx-react'
import UserStore from './Store/User'

const Home = props => {
    return (
        <div className="container">
            <h1>Hello, {UserStore._id ? UserStore.email : 'Stranger'}!</h1>
        </div>
    )
}

export default observer(Home)
