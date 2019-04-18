

/*
    First thing we want to do is create our first reducer called the helloReducer.  We are going to create that here.
    Look at this documentation for what is a reducer:

    https://redux.js.org/basics/reducers

*/

export const firstAction = 'FIRST'


const initialState = {
    fin: true, // just ignore this


    first: false,
}


/**
    This will be a super basic reducer. It will look for an action called  'FIRST'
    and will change the variable in your store called 'hello.first' from 'false' to 'true'.


*/
export const helloReducer = (/* what goes here.... */) => {
    // START HERE!    
}