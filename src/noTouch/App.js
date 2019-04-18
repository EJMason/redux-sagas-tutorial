import React, { Component } from 'react'
import './App.css'

import { Container, Header } from 'semantic-ui-react'
import Alpha from '../Alpha'
import Beta from '../Beta'


class App extends Component {

  constructor(props) {
    super(props)

    // todo change it back
    this.state = {
      alphaComplete: false
    }

  }

  Header = () => (
    <Header size='huge' color='teal' dividing>
      Learn to Redux
    </Header>
  )

  alphaComplete = () => {
    this.setState({
      ...this.state,
      alphaComplete: true
    })
  }

  render() {
    return (
      <div className="App">
        <Container>
          {this.Header()}




          <Alpha true checker={this.alphaComplete} />






          {(this.state.alphaComplete) ? <Beta /> : null}

          



        </Container>
      </div>
    )
  }
}

export default App;
