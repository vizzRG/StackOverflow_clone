import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import bars from '../../assets/bars-solid.svg'
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'
const Navbar = () => {
    let User = null;
    const navigate = useNavigate()
  return (
    <nav className="main-nav">
        <div className="navbar">
            <button className="slide-in-icon">
                <img src={bars} alt="bars" width = '15' />
            </button>

            <div className="navbar-1">
                <Link to="/" className='nav-item nav-logo'>
                    <img src={logo} alt="logo" />
                </Link>

                <Link to="/" className='nav-item nav-btn res-nav'>
                    About
                </Link>

                <Link to="/" className='nav-item nav-logo nav-btn'>
                    Products
                </Link>

                <Link to="/" className='nav-item nav-logo nav-btn'>
                    For Teams
                </Link>
                <form> 
                <img src={search} alt="search" width='18' className='search-icon' />
                <input type="text" placeholder='Search...' />
                </form>
            </div>

            <div className="navbar-2">
                {User===null?(
                    <Link to= '/Auth' className='nav-item nav-links'>
                        Log in
                    </Link>
                ):(
                    <>
                    <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color='white'>
                        <Link to='' style={{color:"white", textDecoration:'none'
                        }}></Link>
                    </Avatar>
                    <button className="nav-tem nav-links">Log out</button>
                    </>
                )}
            </div>
        </div>
    </nav>
  )
}

export default Navbar
