import React from 'react'
import { Link } from 'react-router-dom'
import { BsBucketFill, BsFillPersonFill } from 'react-icons/bs'
import { FaCheckCircle, FaSearch, FaMapMarkedAlt } from 'react-icons/fa'
import '../scss/index.scss'

const Nav = () => {
    return (
        <nav className='nav-container'>
            <Link 
                to='/explore' 
                onClick={() => window.scrollTo(0, 0)} 
                className='nav-item'
            >
                <FaSearch className='nav-icon'/>
                <p>EXPLORE</p>
            </Link>
            <Link 
                to='/bucketlist' 
                onClick={() => window.scrollTo(0, 0)} 
                className='nav-item'
            >
                <BsBucketFill className='nav-icon'/>
                <p>BUCKET LIST</p>
            </Link>
            <Link 
                to='/visited' 
                onClick={() => window.scrollTo(0, 0)} 
                className='nav-item'
            >
                <FaCheckCircle className='nav-icon'/>
                <p>VISITED</p>
            </Link>
            <Link 
                to='/map' 
                onClick={() => window.scrollTo(0, 0)} 
                className='nav-item'
            >
                <FaMapMarkedAlt className='nav-icon'/>
                <p>MAP</p>
            </Link>
            <Link 
                to='/user' 
                onClick={() => window.scrollTo(0, 0)} 
                className='nav-item'
            >
                <BsFillPersonFill className='nav-icon'/>
                <p>USERPAGE</p>
            </Link>
        </nav>
    )
}

export default Nav