// Context API

import React from 'react'

const MyContext = React.createContext('React')

function App() {
  return (
    <MyContext.Provider value="Vue">
      <FrontFramework />
    </MyContext.Provider>
  )
}

function FrontFramework() {
  return <Hello />
}

class Hello extends React.Component {
  // static contextType = MyContext

  render() {
    // return <div>Hello, {this.context}</div>
    return (
      <MyContext.Consumer>{value => <div>{value}</div>}</MyContext.Consumer>
    )
  }
}

export default App
