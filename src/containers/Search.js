import React, { Component } from 'react'
import { changeState, addAllNP } from '../actions'
import { connect } from 'react-redux'
import { getNPbyState } from '../apiCalls/apiCalls'
import { stateCodes } from '../constants'
import { FaSearchLocation, FaSearch } from 'react-icons/fa'


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateCode: '',
            stateCodeAdd: '',
            keyword: ''
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
        const npData = await getNPbyState(this.state.stateCode)
        npData && this.props.changeState(npData.data)
        this.clearInput('stateCode')
    }

    addState = async (e) => {
        e.preventDefault()
        const npData = await getNPbyState(this.state.stateCodeAdd)
        npData && this.props.addAllNP(npData.data)
        this.clearInput('stateCodeAdd')
    }

    clearInput = (key) => {
        this.setState({ [key]: '' });
    }

    render () {
        return (
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
                    <button
                        className='search-btn'
                    >
                        <FaSearch/>
                    </button>
                </div>
            </section>
        )
    }
}

const mapDispatch = (dispatch) => ({
    changeState: np => dispatch( changeState(np)),
    addAllNP: np => dispatch( addAllNP(np))
})

export default connect(null, mapDispatch)(Search)