import React from 'react'
import './App.css'
import { add } from './math'

// 2.1 打包
console.log(add(10, 20))

import('./math').then(math => {
  console.log(math.add(10, 20))
})

function App() {
  return <div className="App">React</div>
}

export default App
