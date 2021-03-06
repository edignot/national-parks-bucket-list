import React from 'react'
import { connect } from 'react-redux'
import SliderContainer from './SliderContainer'
import MiniMap from './MiniMap'
import NoteContainer from './NoteContainer'
import { AiFillInfoCircle } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoIosPartlySunny } from 'react-icons/io'
import { MdComputer } from 'react-icons/md'


const NPInfo = ({np, sesion}) => {
    window.scrollTo(0, 0)
    const npInfo = np.find(park => park.id === sesion.npID)
    const { 
        id, 
        visited, 
        bucket, 
        name,
        designation,
        latitude,
        longitude,
        states,
        description,
        weatherInfo,
        url
     } = npInfo
        
    return (
        <section className='np-info-container'>
            <SliderContainer/>
            <section className='np-info-map-wrapper'>
                <article className='np-info-wrapper'>
                    <h2>{name} {designation}</h2>
                    <div className='np-feature'>
                        <div>
                            <FaMapMarkerAlt className='feature-icon'/>
                        </div>
                        <p>{states}</p>
                    </div>
                    <div className='np-feature'>
                        <div>
                            <AiFillInfoCircle className='feature-icon'/>
                        </div>
                        <p>{description}</p>
                    </div>
                    <div className='np-feature'>
                        <div>
                            <IoIosPartlySunny className='feature-icon'/>
                        </div>
                        <p>{weatherInfo}</p>
                    </div>
                    <div className='np-feature'>
                        <div>
                            <MdComputer className='feature-icon'/>
                        </div>
                        <a 
                            href={url} target='_blank'
                            rel="noopener noreferrer"
                        >
                            website
                        </a>
                    </div>    
                </article>

                <div className='np-info-map'>
                    <MiniMap
                        lat={latitude}
                        lng={longitude}
                        id={id}
                        name={name}
                        designation={designation}
                        visited={visited}
                        bucket={bucket}
                    />
                </div>
            </section>    
            <NoteContainer id={id}/>  
        </section>
    )
}

export const mapState = state => ({
    np: state.np,
    sesion: state.sesion
})

export default connect(mapState)(NPInfo)