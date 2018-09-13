import ReactDOM from 'react-dom'
import React from 'react'

function renderApp() {
    const Application = require('./Application').default
    ReactDOM.render(<Application />, document.getElementById('app'))
}

renderApp()

if (module.hot) {
    module.hot.accept(renderApp)
}
