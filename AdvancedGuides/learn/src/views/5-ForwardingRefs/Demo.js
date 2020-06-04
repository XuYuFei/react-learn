import React from 'react'

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
))

class App extends React.Component {
  render() {
    // 直接获取 DOM button 的 ref
    const ref = React.createRef()

    return <FancyButton ref={ref}>Click me!</FancyButton>
  }
}

export default App
