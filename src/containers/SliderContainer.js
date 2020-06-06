import React from 'react'
import { Link } from 'react-router-dom'
import { toggleBucketNP, toggleVisitedNP } from '../actions'
import { connect } from 'react-redux'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaArrowCircleLeft, FaRegCircle, FaCheckCircle } from 'react-icons/fa'
import { BsBucket, BsBucketFill } from 'react-icons/bs'


const SliderContainer = (props) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    
    const sliderItems = props.images.map(img => {
        return (
          <div>
            <img src={img.url} alt="spot" className="slider-img"/>
          </div>
        )
    })
    
    return (
        <section className='slider-container'>
            <Link to="/explore">
                <FaArrowCircleLeft
                    className="details-back-btn"
                />
            </Link>
            {!props.visited
                ? <FaRegCircle
                    className="np-slider-check"
                    onClick={() => props.toggleVisitedNP(props.id)}
                    />
                : <FaCheckCircle
                    className="np-slider-check"
                    onClick={() => props.toggleVisitedNP(props.id)}
                    />
                }
                {!props.bucket
                ? <BsBucket
                    className="np-slider-bucket"t
                    onClick={() => props.toggleBucketNP(props.id)}
                    />
                : <BsBucketFill
                    className="np-slider-bucket"
                    onClick={() => props.toggleBucketNP(props.id)}
                    />
              }
            <Slider {...sliderSettings} className='np-slider'>
              {sliderItems}
            </Slider>
        </section>
    )
}

const mapDispatch = (dispatch) => ({
  toggleBucketNP: id => dispatch( toggleBucketNP(id)),
  toggleVisitedNP: id => dispatch( toggleVisitedNP(id))
})

export default connect(null, mapDispatch)(SliderContainer)