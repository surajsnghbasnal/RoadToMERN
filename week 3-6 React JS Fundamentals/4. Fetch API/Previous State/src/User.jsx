import React, { useEffect, useRef } from 'react'

const User = ({ count }) => {

    const lastVal = useRef()
    useEffect(() => {
        lastVal.current = count
    })

    const prevProp = lastVal.current

    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>Prev Value: {prevProp }</h1>
        </div>
    )
}

export default User
