import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Movie = () => {
    const API = "http://localhost:8000/movies"
    const [movies, setMovies] = useState([])

    const getMoviesData = async () => {
        try {
            const res = await axios.get(API)
            setMovies(res.data);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getMoviesData()
    }, [])

    return (
        <div>
            <h1>Movie</h1>
            <ul>
                {
                    movies.map((mov) => {
                        return <div key={mov.id}>
                            <p>{mov.title}</p>
                        </div>
                    })
                }
            </ul>
        </div>
    )
}

export default Movie
