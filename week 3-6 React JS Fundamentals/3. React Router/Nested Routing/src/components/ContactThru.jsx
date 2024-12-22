import React from 'react'
import { useParams } from 'react-router-dom'

const ContactThru = () => {
    const params = useParams()
    const { source } = params
    return (
        <div>
            <h2>Contact Via {source}.</h2>
        </div>
    )
}

export default ContactThru
