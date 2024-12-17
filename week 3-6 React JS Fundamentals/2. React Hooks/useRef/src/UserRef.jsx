import React, { forwardRef } from 'react'

const user = (props, ref) => {
    return (
        <div>
            <input type='text' ref={ref} />
        </div>
    )
}

export default forwardRef(user)
