// Context.displayName
import React from 'react'

const MyContext = React.createContext('React')
MyContext.displayName = 'MyDisplayName'

class App extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {value => <div>Hello {value}</div>}
      </MyContext.Consumer>
    )
  }
}
App.contextType = MyContext

export default App
