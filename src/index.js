import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './noTouch/index.css'
import App from './noTouch/App'


/**
    Once we have created out store lets import it and create our provider
    for wrapping our entire application

    Look at the very bottom of the page here on how to implement our provider: https://redux.js.org/basics/usage-with-react
*/


const rootElement = (
    <App/>
)

ReactDOM.render(rootElement, document.getElementById('root'))

