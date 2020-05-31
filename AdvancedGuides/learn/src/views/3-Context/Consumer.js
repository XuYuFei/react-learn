// Context.Consumer
import React from 'react'

const MyContext = React.createContext('React')

class App extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {value => <div>Hello {value}</div>}
      </MyContext.Consumer>
    )
  }
}

export default App
