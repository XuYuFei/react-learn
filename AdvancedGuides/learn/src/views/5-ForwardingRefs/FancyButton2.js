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
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps)
      console.log('new props:', this.props)
    }

    handleClick() {
      console.log('LogProps')
    }

    render() {
      const { forwardedRef, ...rest } = this.props

      // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
      return <WrappedComponent ref={forwardedRef} {...rest} />
    }
  }

  // 注意 React.forwardRef 回调的第二个参数“ref”
  // 可以将其作为常规 prop 属性传递给 LogProps,例如“forwardedRef”
  // 然后它就可以被挂载到被 LogProps 包裹的子组件上
  // return React.forwardRef(function myFunction(props, ref) {
  //   return <LogProps {...props} forwardedRef={ref} />
  // })
  // return React.forwardRef((props, ref) => {
  //   return <LogProps {...props} forwardedRef={ref} />
  // })

  function forwardRef(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />
  }

  // 在 DevTools 中为该组件提供一个更有用的显示名
  // 例如 “ForwardRef(logProps(MyComponent))”
  const name = WrappedComponent.displayName || WrappedComponent.name
  forwardRef.displayName = `logProps(${name})`

  return React.forwardRef(forwardRef)
}

export default logProps(FancyButton)
