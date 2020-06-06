import React from 'react'
import { Link } from 'react-router-dom'
import { FaMountain } from 'react-icons/fa'
import { connect } from 'react-redux'
import { displayNP } from '../actions'


const MapTag = (props) => {
    return (
      <Link
        to={`np/${props.name}`}
        onClick={() => props.displayNP(props.id)} 
      >
        <FaMountain className='map-tag'/>
        <h2>{props.name} {props.designation}</h2>
      </Link>
    )
}

const mapDispatch = (dispatch) => ({
  displayNP: id => dispatch( displayNP(id)),
})

export default connect(null, mapDispatch)(MapTag)