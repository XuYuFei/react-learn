import React from 'react'
import FancyButton from './FancyButton2'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.ref = React.createRef()
  }

  componentDidMount() {
    console.log(this.ref.current.handleClick)
  }

  render() {
    return <FancyButton label="Click Me" ref={this.ref} />
  }
}

export default App
