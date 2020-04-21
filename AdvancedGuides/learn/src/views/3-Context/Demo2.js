import React from 'react'

// 为当前theme创建一个context(默认值：light)
const ThemeContext = React.createContext('light')

class App extends React.Component {
  render() {
    // 使用一个Provider来将当前的 theme 传递给以下的组件树
    // 将“dark”作为当前值传递下去
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前 theme context
  static contextType = ThemeContext
  render() {
    return <Button theme={this.context} />
  }
}

function Button(props) {
  return <button className={props.theme}>Context</button>
}

export default App
