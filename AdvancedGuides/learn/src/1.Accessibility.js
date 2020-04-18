import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Fragment } from 'react'

function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

// 1.3 - 语义化的HTML
function ListItem({ item }) {
  return (
    <Fragment>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  )
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  )
}

function App2() {
  const items = [
    { id: 1, term: 'vue', description: 'hello vue' },
    { id: 2, term: 'react', description: 'hello react' },
  ]

  return <Glossary items={items} />
}

// 1.4 - 无障碍表单
function App3() {
  return (
    <div>
      <label htmlFor="namedInput">Name:</label>
      <input id="namedInput" type="text" name="name" />
    </div>
  )
}

// 使用程序管理焦点
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props)

    // 创造一个textInput DOM元素的ref
    this.textInput = React.createRef()

    this.focus = this.focus.bind(this)
  }

  // 在需要时设置焦点到组件上
  focus() {
    this.textInput.current.focus()
  }

  // 使用`ref`回调函数以在实例的一个变量中存储文本输入DOM元素
  // (比如：this.textInput)
  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <span onClick={this.focus}>click me</span>
      </div>
    )
  }
}

// export default CustomTextInput

// 在子组件设置一个特殊prop来对父组件暴露DOM refs
function CustomeTextInput2(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  )
}

class Parent extends React.Component {
  constructor(props) {
    super(props)

    this.inputElement = React.createRef()
    this.focus = this.focus.bind(this)
  }

  // 挂载时设置焦点
  componentDidMount() {
    this.focus()
  }

  focus() {
    this.inputElement.current.focus()
  }

  render() {
    return (
      <>
        <CustomeTextInput2 inputRef={this.inputElement} />
        <button onClick={this.focus}>Click to focus</button>
      </>
    )
  }
}

// export default Parent

// 1.5 - 鼠标和指针事件
// click事件
class OuterClickExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = { isOpen: false }
    this.toggleContainer = React.createRef()

    this.onClickHandle = this.onClickHandle.bind(this)
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this)
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler)
  }

  componentWillMount() {
    window.addEventListener('click', this.onClickOutsideHandler)
  }

  onClickHandle() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen,
    }))
  }

  onClickOutsideHandler(event) {
    if (
      this.state.isOpen &&
      !this.toggleContainer.current.contains(event.target)
    ) {
      this.setState({ isOpen: false })
    }
  }

  render() {
    return (
      <div
        ref={this.toggleContainer}
        style={{ background: 'silver', width: '200px' }}>
        <button onClick={this.onClickHandle}>Select an option</button>
        {this.state.isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    )
  }
}

// blur事件
class BlurExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = { isOpen: false }
    this.timeOutId = null

    this.onClickHandler = this.onClickHandler.bind(this)
    this.onBlurHandler = this.onBlurHandler.bind(this)
    this.onFocusHandler = this.onFocusHandler.bind(this)
  }

  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen,
    }))
  }

  onBlurHandler() {
    this.timeOutId = setTimeout(() => {
      this.setState({
        isOpen: false,
      })
    })
  }

  onFocusHandler() {
    clearTimeout(this.timeOutId)
  }

  render() {
    return (
      <div onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}>
        <button
          onClick={this.onClickHandler}
          aria-haspopup="true"
          aria-expanded={this.state.isOpen}>
          Select an option
        </button>
        {this.state.isOpen && (
          <ul>
            <li>Option1</li>
            <li>Option2</li>
            <li>Option3</li>
          </ul>
        )}
      </div>
    )
  }
}

function App() {
  return (
    <>
      {/* <App2/> */}
      {/* <App3/> */}
      {/* <CustomTextInput /> */}
      {/* <Parent /> */}
      {/* <OuterClickExample /> */}
      <BlurExample />
    </>
  )
}

export default App
