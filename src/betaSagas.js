import { fork, take, call, put } from 'redux-saga/effects'
// blocking cheat sheet: https://redux-saga.js.org/docs/api/#blocking--non-blocking

// spawn vs fork = https://stackoverflow.com/questions/43259301/whats-the-difference-between-fork-and-spawn-in-redux-saga

// what is put

// what is take

// what is call



// -------------------------------------------------------------------------------------------

// this is just a helper
const simulateGetRequest = () => new Promise((res, rej) => {
    setTimeout(() => {
        if (blah) {
            res(['clean the sink', 'eat my sandwuch', 'do some sit ups', 'look at a picture', 'practice snapping'])
        }
        else {
            rej(new Error('ahhhhhhhhh'))
        }
    }, 49999)
})







// -------------------------------------------------------------------------------------------




function* saga1() {

}



//root saga patterns: https://redux-saga.js.org/docs/advanced/RootSaga.html
function* root() {

}

export default root


// once finished, run the root saga in your redux boilerplate file
// https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html