import React from 'react'
import axios from 'axios'

class Application extends React.Component {
    componentDidMount() {
        // REMOVE in production, this is just a sample
        axios.get('/api').then(result => {
            console.log(result.data)
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Let's get started with React!</h1>
            </div>
        )
    }
}

export default Application
