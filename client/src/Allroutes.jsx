import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Askquestion from './pages/Askquestion/Askquestion'
function Allroutes(slidein,handleslidein) {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home slidein={slidein} handleslidein={handleslidein}/>}/>
      <Route  path='/Askquestion' element={<Askquestion />}/>
      </Routes>
    </div>
  )
}

export default Allroutes
