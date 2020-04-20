import React from 'react'
import './App.css'
import { add } from './math'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// 2.1 打包
console.log(add(10, 20))

import('./math').then(math => {
  console.log(math.add(10, 20))
})

// React.lazy
const HelloWorld = React.lazy(() => import('./components/HelloWorld'))

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HelloWorld />
      </Suspense>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  )
}

// 基于路由的代码分割
const Home = lazy(() => import('./routes/Home'))
const About = lazy(() => import('./routes/About'))

const App2 = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Suspense>
  </Router>
)

export default App2
