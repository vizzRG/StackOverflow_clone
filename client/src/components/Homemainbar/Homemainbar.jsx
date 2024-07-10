import React from 'react'
import './Homemainbar.css'
import { useLocation, useNavigate } from 'react-router-dom'
import Questionlist from './Questionlist'
import { useSelector } from 'react-redux'

const Homemainbar = () => {
  const user = 1;
  const location = useLocation();
  const Navigate = useNavigate();
  const questionlist = null;
  const checkauth = () =>{
    if(user ===null){
      alert("login or Signup to ask a question")
      Navigate("/Auth")
    }else{
      Navigate("/Askquestion")
    }
  }
  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Question</h1>
        ) : (
          <h1>All Question</h1>
        )}
        <button className='ask-btn' onClick={checkauth
        
        }>Ask Question</button>
      </div>
      <div>{
        questionlist === null ? (
          <h1>Loading...</h1>
        ) : (<>
          <p>{questionlist.data.length}questions</p>
          <Questionlist questionlist = {questionlist.data}/>
        </>
        )
      }
      </div>
    </div>
  )
}

export default Homemainbar
