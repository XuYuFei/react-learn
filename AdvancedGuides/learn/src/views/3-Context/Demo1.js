import React from 'react'

function App() {
  return <Toolbar theme="dark" />
}

function Toolbar(props) {
  return (
    <div>
      <ThemButton theme={props.theme} />
    </div>
  )
}

class ThemButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />
  }
}

function Button(props) {
  return <button className={props.theme}>Props自上而下传递</button>
}

export default App
