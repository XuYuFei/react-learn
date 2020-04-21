import React, { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Demo1 = lazy(() => import('./views/3-Context/Demo1'))
const Demo2 = lazy(() => import('./views/3-Context/Demo2'))
const Demo3 = lazy(() => import('./views/3-Context/Demo3'))

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/Context/demo1" component={Demo1} />
        <Route path="/Context/demo2" component={Demo2} />
        <Route path="/Context/demo3" component={Demo3} />
      </Switch>
    </Suspense>
  </Router>
)

export default App
