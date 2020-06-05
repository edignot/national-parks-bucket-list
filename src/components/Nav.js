import React from 'react'
import { BsBucketFill, BsFillPersonFill } from 'react-icons/bs'
import { FaCheckCircle, FaSearch, FaMapMarkedAlt } from 'react-icons/fa'

const Nav = () => {
    return (
        <nav>
            <FaSearch/>
            <BsBucketFill/>
            <FaCheckCircle/>
            <FaMapMarkedAlt/>
            <BsFillPersonFill/>
        </nav>
    )
}

export default Nav