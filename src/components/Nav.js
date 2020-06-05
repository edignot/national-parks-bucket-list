import React from 'react'
import { Link } from 'react-router-dom'
import { BsBucketFill, BsFillPersonFill } from 'react-icons/bs'
import { FaCheckCircle, FaSearch, FaMapMarkedAlt } from 'react-icons/fa'

const Nav = () => {
    return (
        <nav>
            <Link to='explore' className='nav-item'>
                <FaSearch/>
                EXPLORE
            </Link>
            <Link to='bucketlist' className='nav-item'>
                <BsBucketFill/>
                BUCKET LIST
            </Link>
            <Link to='visited' className='nav-item'>
                <FaCheckCircle/>
                VISITED
            </Link>
            <Link to='map' className='nav-item'>
                <FaMapMarkedAlt/>
                MAP
            </Link>
            <Link to='userpage' className='nav-item'>
                <BsFillPersonFill/>
                USERPAGE
            </Link>
        </nav>
    )
}

export default Nav