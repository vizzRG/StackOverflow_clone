import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import Allroutes from './Allroutes'
function App() {
  const [slidein, setslidein] = useState(true)
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setslidein(false)
    }
  }, [])

  const handleslidein = () => {
    if (window.innerWidth <= 768) {
      setslidein((state) => !state)
    }
  }




  return (
    <>
      <div className="app">
        <Router>
          <Navbar handleslidein={handleslidein} />
          <Allroutes slidein={slidein} handleslidein={handleslidein}></Allroutes>
        </Router>
      </div>

    </>
  )
}

export default App
