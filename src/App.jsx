import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import FirstBlogSection from './components/FIrstBlogSection.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="max-w-[1400px] mx-auto border-2 border-[#181717] text-center my-5">
        <Header /> 
        <FirstBlogSection />
      </div>
    </>
  )
}

export default App
