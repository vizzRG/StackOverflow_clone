import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
function Allroutes(slidein,handleslidein) {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home slidein={slidein} handleslidein={handleslidein}/>}/>

      </Routes>
    </div>
  )
}

export default Allroutes
