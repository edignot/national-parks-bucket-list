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
    console.log('NPINFO', props.id)
    console.log('IMAGES', props.images)
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }

    const imag = [
        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    ]
    
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
            {1===2
                ? <FaRegCircle
                    className="np-slider-check"
                    onClick={() => toggleVisitedNP(props.npInfo.id)}
                    />
                : <FaCheckCircle
                    className="np-slider-check"
                    onClick={() => toggleVisitedNP(props.npInfo.id)}
                    />
                }
                {1===2
                ? <BsBucket
                    className="np-slider-bucket"t
                    onClick={() => toggleBucketNP(props.npInfo.id)}
                    />
                : <BsBucketFill
                    className="np-slider-bucket"
                    onClick={() => toggleBucketNP(props.npInfo.id)}
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