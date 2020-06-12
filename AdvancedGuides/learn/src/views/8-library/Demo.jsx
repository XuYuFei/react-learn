import React, { Component } from 'react'
import $ from 'jquery'
import 'jquery-chosen/chosen.min.css'

window.jQuery = $
require('jquery-chosen/chosen.jquery')

// eslint-disable-next-line no-unused-vars
class App extends Component {
  componentDidMount() {
    this.$el = $(this.el)
    this.$el.html('hello world')
  }

  render() {
    return <div ref={el => (this.el = el)} />
  }
}

class Chosen extends React.Component {
  componentDidMount() {
    this.$el = $(this.el)
    this.$el.chosen()

    this.handleChange = this.handleChange.bind(this)
    this.$el.on('change', this.handleChange)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      this.$el.trigger('chosen:updated')
    }
  }

  componentWillUnmount() {
    this.$el.off('change', this.handleChange)
    this.$el.chosen('destroy')
  }

  handleChange(e) {
    this.props.onChange(e.target.value)
  }

  render() {
    return (
      <div>
        <select className="Chosen-select" ref={el => (this.el = el)}>
          {this.props.children}
        </select>
      </div>
    )
  }
}

function Example() {
  return (
    <Chosen onChange={value => console.log(value)}>
      <option>vue</option>
      <option>react</option>
      <option>angular</option>
    </Chosen>
  )
}

function Button(props) {
  return <button onClick={props.onClick}>Say Hello</button>
}

function HelloButton() {
  function handleClick() {
    alert('Hello')
  }
  return <Button onClick={handleClick} />
}

export default HelloButton
