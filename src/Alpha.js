import React, { Component } from 'react'

import { Input, Header, Segment, Button } from 'semantic-ui-react'

/**
 * First redux boilerplate
 * Create first reducer
 * Link up with boilerplate
 * Add the provider
 * Bonus: Create an action creator
 */

class Alpha extends Component {

    constructor(props) {
        super(props)

        this.state = {
            textBox: '',
            isFinished: false,
        }
    }

    componentDidUpdate() {
        if (this.props.fin) {
            this.props.checker()
        }
    }

    controlTextBox = (e, data) => {
        this.setState({ ...this.state, textBox: data.value })
    }

    
    reduxButton = (e) => {
        e.preventDefault()

        console.log('Button Clicked')
    }


    render() {
        return (
            <Segment raised>
                <Header size='medium'>Part 1: Simple Reducer</Header>
                <p>
                    First Task: Input something into the text box and set it in your redux store.
                </p>
                <p>The Reducer will be called: <b>helloReducer</b></p>
                <p>The property value will be: <b>hello.first</b></p>

                <Input onChange={this.controlTextBox} placeholder='Search...' />
                <Button onClick={this.reduxButton} primary>Set String</Button>

            </Segment>
        )
    }
}

// map state and dispatch

export default Alpha
