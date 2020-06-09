import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BsBucket, BsBucketFill } from 'react-icons/bs'
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa'
import { displayNP } from '../actions'


const MapTag = ({name, id, designation, displayNP, visited, bucket}) => {
    return (
      <Link
        className='map-link'
        to={`/np/${name}`}
        onClick={() => displayNP(id)} 
      >
          {!visited ? 
            <FaRegCircle 
              className='map-tag'
              data-testid='map-visited-false'
            /> : 
            <FaCheckCircle 
              className='map-tag'
              data-testid='map-visited-true'
            />
          }
          {!bucket ?
            <BsBucket 
              className='map-tag'
              data-testid='map-bucket-false'
            /> : 
            <BsBucketFill 
              className='map-tag'
              data-testid='map-bucket-true'
            />
           }
        <h2 className='map-title'>{name} {designation}</h2>
      </Link>
    )
}

const mapDispatch = (dispatch) => ({
  displayNP: id => dispatch( displayNP(id)),
})

export default connect(null, mapDispatch)(MapTag)

MapTag.propTypes = {
    lat: PropTypes.string.isRequired,
    lng: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    visited: PropTypes.bool.isRequired,
    bucket: PropTypes.bool.isRequired
}