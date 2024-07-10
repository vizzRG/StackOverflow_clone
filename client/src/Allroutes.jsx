import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Askquestion from './pages/Askquestion/Askquestion'
import Auth from './pages/Auth/Auth'
import Question from './components/Homemainbar/Question'
import Displayquestion from './pages/Question/Displayquestion'


function Allroutes(slidein, handleslidein) {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home slidein={slidein} handleslidein={handleslidein} />} />
        <Route path='/Askquestion' element={<Askquestion />} />
        <Route path='/Auth' element={<Auth />} />
        <Route path='/Question' element={<Question slidein={slidein} handleslidein={handleslidein} />} />
        <Route path='/Question/:id' element={<Displayquestion slidein={slidein} handleslidein={handleslidein} />} />
      </Routes>
    </div>
  )
}

export default Allroutes
