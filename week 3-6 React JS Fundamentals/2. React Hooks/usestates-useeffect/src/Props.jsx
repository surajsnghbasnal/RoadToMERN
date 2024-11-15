import React from 'react'

const Props = ({ func }) => {


    return (
        <div>
            <h1>Props Component</h1>
            <button onClick={func}>Call</button>
        </div>
    )
}

export default Props
