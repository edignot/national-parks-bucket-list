import React from 'react'
import { Link } from 'react-router-dom'
import { BsBucket, BsBucketFill } from 'react-icons/bs'
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa'
import { connect } from 'react-redux'
import { displayNP } from '../actions'


const MapTag = ({name, id, designation, displayNP, visited, bucket}) => {
    return (
      <Link
        className='map-link'
        to={`/np/${name}`}
        onClick={() => displayNP(id)} 
      >
          {!visited ? <FaRegCircle className='map-tag'/> : <FaCheckCircle className='map-tag'/>}
          {!bucket ? <BsBucket className='map-tag'/> : <BsBucketFill className='map-tag'/>}
        <h2 className='map-title'>{name} {designation}</h2>
      </Link>
    )
}

const mapDispatch = (dispatch) => ({
  displayNP: id => dispatch( displayNP(id)),
})

export default connect(null, mapDispatch)(MapTag)