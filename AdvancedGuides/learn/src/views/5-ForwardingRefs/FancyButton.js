import React from 'react'

class FancyButton extends React.Component {
  handleClick() {
    console.log('FancyButton')
  }

  render() {
    return <button>{this.props.label}</button>
  }
}

function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidMount(prevProps) {
      console.log('old props:', prevProps)
      console.log('new props:', this.props)
    }

    handleClick() {
      console.log('LogProps')
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return LogProps
}

export default logProps(FancyButton)
