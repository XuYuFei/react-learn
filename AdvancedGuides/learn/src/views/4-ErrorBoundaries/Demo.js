import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })

    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }

    // Normally, just render children
    return this.props.children
  }
}

class BuggyCouter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }))
  }

  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error('I crashed!')
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>
  }
}

function App() {
  return (
    <div>
      <p>
        <b>
          This is an example of error boundaries in React 16.
          <br />
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw when it reaches 5.
          <br />
          This simulates a Javascript error in a component.
        </b>
        <br />
        <ErrorBoundary>
          <p>
            These two counters are inside the same error boundary.
            <br />
            If one crashes, the error boundary will replace both of them.
          </p>
          <BuggyCouter />
          <BuggyCouter />
        </ErrorBoundary>
        <br />
        <p>
          These two counters are each inside of their own error boundary.
          <br />
          So if one crashes, the other is not affected.
        </p>
        <ErrorBoundary>
          <BuggyCouter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCouter />
        </ErrorBoundary>
      </p>
    </div>
  )
}

export default App
