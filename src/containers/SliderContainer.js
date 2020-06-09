import React from 'react'
import { Link } from 'react-router-dom'
import { toggleBucketNP, toggleVisitedNP } from '../actions'
import { connect } from 'react-redux'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaArrowCircleLeft, FaRegCircle, FaCheckCircle } from 'react-icons/fa'
import { BsBucket, BsBucketFill } from 'react-icons/bs'


const SliderContainer = ({np, sesion, toggleBucketNP, toggleVisitedNP}) => {
    const npInfo = np.find(park => park.id === sesion.npID)
    const {
        id, 
        images, 
        visited, 
        bucket
    } = npInfo
    
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    
    const sliderItems = images.map(img => {
        return (
          <div key={img.url}>
            <img src={img.url} alt="spot" className="slider-img"/>
          </div>
        )
    })
    
    return (
        <section className='slider-container'>
            <Link to="/explore">
                <FaArrowCircleLeft
                    data-testid='back-btn'
                    className='details-back-btn'
                />
            </Link>
            {!visited
                ? <FaRegCircle
                    data-testid='visited-false'
                    className='np-slider-check'
                    onClick={() => toggleVisitedNP(id)}
                    />
                : <FaCheckCircle
                    data-testid='visited-true'
                    className='np-slider-check'
                    onClick={() => toggleVisitedNP(id)}
                    />
                }
                {!bucket
                ? <BsBucket
                    data-testid='bucket-false'
                    className='np-slider-bucket'
                    onClick={() => toggleBucketNP(id)}
                    />
                : <BsBucketFill
                    data-testid='bucket-true'
                    className='np-slider-bucket'
                    onClick={() => toggleBucketNP(id)}
                    />
              }
            <Slider 
                {...sliderSettings} 
                className='np-slider'
            >
              {sliderItems}
            </Slider>
        </section>
    )
}

export const mapState = state => ({
    np: state.np,
    sesion: state.sesion
})

const mapDispatch = (dispatch) => ({
  toggleBucketNP: id => dispatch( toggleBucketNP(id)),
  toggleVisitedNP: id => dispatch( toggleVisitedNP(id))
})

export default connect(mapState, mapDispatch)(SliderContainer)