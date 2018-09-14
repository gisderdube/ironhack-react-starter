import React from 'react'
import { Redirect } from 'react-router-dom'

class Logout extends React.Component {
    constructor(props) {
        super(props)

        localStorage.removeItem('identity')
        props.resetUser()
    }

    render() {
        return <Redirect to="/" />
    }
}

export default Logout
