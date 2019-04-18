import React, { Component } from 'react'
import './App.css'

import { Container, Header, Segment } from 'semantic-ui-react'
import Alpha from '../Alpha'


class App extends Component {

  Header = () => (
    <Header size='huge' color='teal' dividing>
      Learn to Redux
    </Header>
  )

  render() {
    return (
      <div className="App">
        <Container>
          {this.Header()}
          <Alpha />




        </Container>
      </div>
    )
  }
}

export default App;
