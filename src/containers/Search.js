import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { changeState, addAllNP, searchByTitle } from '../actions'
import { connect } from 'react-redux'
import { getNPbyState } from '../apiCalls/apiCalls'
import { stateCodes } from '../constants'
import { FaSearchLocation, FaSearch } from 'react-icons/fa'
import { BsBucket } from 'react-icons/bs'
import { cleanNPData } from '../helper'


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateCode: '',
            stateCodeAdd: '',
            keyword: '',
            isLoading: false
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    isStateCodeValid = (type) => {
        return stateCodes.includes(this.state[type].toLocaleUpperCase())
    }

    changeState = async (e) => {
        e.preventDefault()
        this.setState({ loading: true })
        const npData = await getNPbyState(this.state.stateCode)
        const npCleanedData = cleanNPData(npData.data)
        npCleanedData && this.props.changeState(npCleanedData)
        this.clearInput('stateCode')
        this.setState({ loading: false })
    }

    addState = async (e) => {
        e.preventDefault()
        this.setState({ loading: true })
        const npData = await getNPbyState(this.state.stateCodeAdd)
        const npCleanedData = cleanNPData(npData.data)
        npCleanedData && this.props.addAllNP(npCleanedData)
        this.clearInput('stateCodeAdd')
        this.setState({ loading: false })
    }

    clearInput = (key) => {
        this.setState({ [key]: '' });
    }

    search = (e) => {
        this.props.searchByTitle(this.state.keyword)
        this.clearInput('keyword')
    }

    render () {
        return (
            <section>
                {!this.state.loading ?
                <section className='search-wrapper'>
                    <div className='search-item-wrapper'>
                        <div className='search-item'>
                            <label htmlFor="stateCode">Change state:</label>
                            <input
                                name='stateCode'
                                type='text'
                                value={this.state.stateCode}
                                placeholder="e.g. CO"
                                onChange={this.handleChange} 
                            />
                        </div>
                        <button
                            className='search-btn'
                            disabled={!this.isStateCodeValid('stateCode')}
                            onClick={this.changeState}
                        >
                            <FaSearchLocation/>
                        </button>
                    </div>
                    <div className='search-item-wrapper'>
                        <div className='search-item'>
                            <label htmlFor="stateCodeAdd">Add state:</label>
                            <input
                                name='stateCodeAdd'
                                type='text'
                                value={this.state.stateCodeAdd}
                                placeholder="e.g. CO ( one at a time... )"
                                onChange={this.handleChange} 
                            />
                        </div>
                        <button
                            className='search-btn'
                            disabled={!this.isStateCodeValid('stateCodeAdd')}
                            onClick={this.addState}
                        >
                            <FaSearchLocation/>
                        </button>
                        
                    </div>
                    <div className='search-item-wrapper'>
                        <div className='search-item'>
                            <label htmlFor="keyword">Search by National Park title:</label>
                            <input
                                name='keyword'
                                type='text'
                                value={this.state.keyword}
                                placeholder="e.g. Monument"
                                onChange={this.handleChange} 
                            />
                        </div>
                        <Link
                            onClick={this.search}
                            to={`/explore/search`}
                            className='search-btn'
                        >
                            <FaSearch/>
                        </Link>
                    </div>
                </section> : 
                <section className='search-loading-container'>
                        <p className='search-loading-msg'>WAIT... FILLING <BsBucket/></p>
                </section>
              }
            </section>
        )
    }
}

const mapDispatch = (dispatch) => ({
    changeState: np => dispatch( changeState(np)),
    addAllNP: np => dispatch( addAllNP(np)),
    searchByTitle: input => dispatch( searchByTitle(input))
})

export default connect(null, mapDispatch)(Search)