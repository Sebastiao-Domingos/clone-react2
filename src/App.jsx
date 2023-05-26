import { useState } from 'react'
import { Header } from './components/header/Header'
import { Section } from './components/section/Section'
import { Section1 } from './components/section1/Section1'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Section/>
      <Section1/>
    </div>
  )
}

export default App
