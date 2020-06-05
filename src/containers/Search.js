import React, { Component } from 'react'
import { changeState } from '../actions'
import { connect } from 'react-redux'
import { getNPbyState } from '../apiCalls/apiCalls'
import { stateCodes } from '../constants'
import { FaSearchLocation, FaSearch } from 'react-icons/fa'


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateCode: '',
            keyword: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    isStateCodeValid = () => {
        return stateCodes.includes(this.state.stateCode.toLocaleUpperCase())
    }

    changeState = async (e) => {
        e.preventDefault()
        const npData = await getNPbyState(this.state.stateCode)
        npData && this.props.changeState(npData.data)
    }

    render () {
        return (
            <section>
                <div className='search-item'>
                    <label htmlFor="stateCode">Change state:</label>
                    <input
                        name='stateCode'
                        type='text'
                        value={this.state.stateCode}
                        placeholder="e.g. CO"
                        onChange={this.handleChange} 
                    />
                    <button
                        disabled={!this.isStateCodeValid()}
                        onClick={this.changeState}
                    >
                        <FaSearchLocation/>
                    </button>
                </div>
                <div className='search-item'>
                    <label htmlFor="keyword">Search by National Park title:</label>
                    <input
                        name='keyword'
                        type='text'
                        value={this.state.keyword}
                        placeholder="e.g. Monument"
                        onChange={this.handleChange} 
                    />
                    <button>
                        <FaSearch/>
                    </button>
                </div>
            </section>
        )
    }
}

const mapDispatch = (dispatch) => ({
    changeState: np => dispatch( changeState(np))
})

export default connect(null, mapDispatch)(Search)