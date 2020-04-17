import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react'

function App() {
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
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


// 1.3 - 语义化的HTML
function ListItem ({ item }) {
  return (
    <Fragment>
      <dt>{ item.term }</dt>
      <dd>{ item.description }</dd>
    </Fragment>
  )
}

function Glossary (props) {
  return (
    <dl>
      {
        props.items.map(item => (
          <ListItem item={item} key={item.id} />
        ))
      }
    </dl>
  )
}


function App2 () {
  const items = [
    { id: 1, term: 'vue', description: 'hello vue' },
    { id: 2, term: 'react', description: 'hello react' }
  ]

  return (
    <Glossary items={ items } />
  )
}

// 1.4 - 无障碍表单
function App3 () {
  return (
    <div>
      <label htmlFor="namedInput" >Name:</label>
      <input id="namedInput" type="text" name="name" />
    </div>
  )
}

// 使用程序管理焦点
class CustomTextInput extends React.Component {
  constructor (props) {
    super(props)

    
    // 创造一个textInput DOM元素的ref
    this.textInput = React.createRef()
    
    this.focus = this.focus.bind(this)
  }

  focus () {
    this.textInput.current.focus()
  }

  render () {
    return (
      <div>
        <input type="text" ref={ this.textInput } />
        <span onClick={ this.focus }>click me</span>
      </div>
    )
  }
}

export default CustomTextInput
