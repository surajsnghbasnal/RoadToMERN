import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [age, setAge] = useState()
    const [city, setCity] = useState()
    const [text, setText] = useState()

    // console.log(age)
    // console.log(city)
    // console.log(text)

    const handleInputs = () => {
        e.preventDefault()

        setSearchParams({ age, city, text })

    }

    return (
        <div>
            <h1>Filter page</h1>

            <form onSubmit={handleInputs}>

                <label>Age</label><br />
                <input type='text' name='age' placeholder='input age' onChange={(e) => setAge(e.target.value)} /><br /><br />

                <label>City</label><br />
                <input type='text' name='city' placeholder='input city' onChange={(e) => setCity(e.target.value)} /><br /><br />

                <label>text</label><br />
                <input type='text' name='text' placeholder='input text' onChange={(e) => setText(e.target.value)} /><br /><br />

                <button type='submit'>Set Data in Query Params.</button><br />

            </form>


            <h1>Query Params values</h1>
            {age ? <p>Age is :{searchParams.get('age')}</p> : null}
            {city ? <p>City is :{searchParams.get('city')}</p> : null}
            {text ? <p>Text is :{searchParams.get('text')}</p> : null}
        </div>
    )
}

export default Filter
