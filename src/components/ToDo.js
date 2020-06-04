import React from 'react'

const ToDo = ({id, todo, completed}) => {
    return (
        <li>{todo} {completed}</li>
    )
}

export default ToDo