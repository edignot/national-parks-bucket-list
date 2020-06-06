import React from 'react'
import { connect } from 'react-redux'


const NPInfo = ({np, user}) => {
    const npInfo = np.find(park => park.id === user.npID)
    return (
        <section>
            {npInfo.name}
        </section>
    )
}

export const mapState = state => ({
    np: state.np,
    user: state.user
})

export default connect(mapState)(NPInfo)