import React, { Component } from 'react'
import { Header, Segment, Button } from 'semantic-ui-react'
import Tabler from './noTouch/Tabler'



/**
* Set up the sagas
* Set up the reducer
* Add redux to beta
* Populate the list
* BONUS: show loading feedback
*/

class Beta extends Component {



    reduxButton = (e) => {
        e.preventDefault()

    }


    render() {
        return (
            <Segment raised>
                <Header size='medium'>Part 2: SAGAS!!!</Header>
                <p>
                    Now lets figure out how we can do stuff async with redux. Using the same reducer,
                    we can add another property. Use an array. Let's pretend we want to log in when we click
                    the button below and then add tasks.
                </p>

                <Button onClick={this.reduxButton} primary>Fetch Tasks</Button>

                <Tabler items={['sample']} />

            </Segment>
        )
    }
}

// map state and dispatch

export default Beta