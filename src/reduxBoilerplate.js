import logger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'


/**
    First we need to import our reducers and combine them INTO A SINGLE STORE,
    usually this is in a separate file, but for simplicity we will combine them here.

    TODO: Implement the HELLO reducer. see ./1/firstReducer
    TODO: use combineReducers and add your helloReducer with 'hello' as the key
    
    See this for help. https://redux.js.org/api/combinereducers
    
*/

// import { helloReducer } from './1/firstReducer'


const rootReducer = combineReducers({
    hello: helloReducer
})
//const rootReducer = null



/*
    Now use createStore from redux and pass it your root reducer and middleware
    see this for help: https://redux.js.org/api/createstore

    second param: applyMiddleware(logger)
*/
export const store = createStore(rootReducer, applyMiddleware(logger))
// export const store = null



/*
    Alright, once this file looks good, go to ./index.js and add the provider
*/