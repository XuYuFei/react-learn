import React from 'react'
import './App.css'
import { add } from './math'
import { Suspense } from 'react'

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

export default App
