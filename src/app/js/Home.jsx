import React from 'react'

const Home = props => {
    return (
        <div className="container">
            <h1>Hello, {props.user ? props.user.email : 'Stranger'}!</h1>
        </div>
    )
}

export default Home
