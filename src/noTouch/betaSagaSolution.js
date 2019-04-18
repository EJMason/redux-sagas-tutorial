import { fork, take, call, put } from 'redux-saga/effects'
// blocking cheat sheet: https://redux-saga.js.org/docs/api/#blocking--non-blocking

// spawn vs fork = https://stackoverflow.com/questions/43259301/whats-the-difference-between-fork-and-spawn-in-redux-saga

// what is put

// what is take

// what is call







function* saga1() {
    while (true) {
        try {
            yield take('GET_DATA')

            yield put({ type: '$$GET_DATA/FETCHING' })
            // do at reducer
            const data = yield call(someApiRequest, '/stuff')
            // side effects in reducer
            yield put({ type: '$$GET_DATA/COMPLETE', payload: data })
        } catch (err) {
            yield put({ type: '$$GET_DATA/ERROR', payload: error })
        }
    }
}


// this is where we put all the sagas
function* root() {
    yield spawn(saga1)
    yield spawn(saga1)
    yield spawn(saga1)
}

