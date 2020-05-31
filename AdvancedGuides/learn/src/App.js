import React, { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Demo1 = lazy(() => import('./views/3-Context/Demo1'))
const Demo2 = lazy(() => import('./views/3-Context/Demo2'))
const Demo3 = lazy(() => import('./views/3-Context/Demo3'))
const Demo4 = lazy(() => import('./views/3-Context/Demo4'))
const ContextType = lazy(() => import('./views/3-Context/ContextType'))
const Consumer = lazy(() => import('./views/3-Context/Consumer'))
const DisplayName = lazy(() => import('./views/3-Context/DisplayName'))
const Dynamic = lazy(() => import('./views/3-Context/dynamic/index'))
const Dynamic2 = lazy(() => import('./views/3-Context/dynamic2/index'))

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/Context/demo1" component={Demo1} />
        <Route path="/Context/demo2" component={Demo2} />
        <Route path="/Context/demo3" component={Demo3} />
        <Route path="/Context/demo4" component={Demo4} />
        <Route path="/Context/ContextType" component={ContextType} />
        <Route path="/Context/Consumer" component={Consumer} />
        <Route path="/Context/DisplayName" component={DisplayName} />
        <Route path="/Context/Dynamic" component={Dynamic} />
        <Route path="/Context/Dynamic2" component={Dynamic2} />
      </Switch>
    </Suspense>
  </Router>
)

export default App
