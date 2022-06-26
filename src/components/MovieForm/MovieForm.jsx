import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function MovieForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [newMovieData, setNewMovieData] = useState({})

    // These functions set state for the new movie object values
    const handleMovieTitle = (event) => {
        setNewMovieData.title(event.target.value);
    }
    const handleMovieImgUrl = (event) => {
        setNewMovieData.title(event.target.value);
    }
    const handleMovieDescription = (event) => {
        setNewMovieData.title(event.target.value);
    }
    const handleMovieGenre = (event) => {
        setNewMovieData.title(event.target.value);
    }

    const addNewMovie = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_NEW_MOVIE',
            payload: newMovieData
        })
        // need save btn and cancel btn, both push to list
        history.push('/display-feedback');
    }

    return (
        <>
            <h2>Enter information to add a movie here</h2>
            <form onSubmit={(event) => addNewMovie(event)}>
                <input
                    onChange={handleMovieTitle}
                    type='text'
                    placeholder='Movie Title'
                />

                <input
                    onChange={handleMovieImgUrl}
                    type='text'
                    placeholder='Movie Img URL'
                />

                <input
                    onChange={handleMovieDescription}
                    type='text'
                    placeholder='Movie Description'
                />

                <input
                    onChange={handleMovieGenre}
                    type='text'
                    placeholder='Need a dropdown here for genres'
                />

                <button type='submit'>Save New Movie</button>
            </form>

            <button
            onClick={() => {history.push('/')}}
            >Cancel</button>
        </>
    )
}

export default MovieForm