// Class.contextType

import React from 'react'

const MyContext = React.createContext('React')

class Hello extends React.Component {
  componentDidMount() {
    let value = this.context
    console.log(value, 'componentDidMount')
  }

  componentDidUpdate() {
    let value = this.context
    console.log(value, 'componentDidUpdate')
  }

  componentWillUnmount() {
    let value = this.context
    console.log(value, 'componentWillUnmount')
  }

  render() {
    let value = this.context
    return <div>Hello {value}</div>
  }
}
Hello.contextType = MyContext

class App extends React.Component {
  static contextType = MyContext
  render() {
    let value = this.context
    return <div>Hello {value}</div>
  }
}

export default App
