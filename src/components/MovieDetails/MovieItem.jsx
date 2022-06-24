// Here make GET request to specific ID for the details of specific movie
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

// Always need to deconstruct movie by placing it in an object!
function MovieItem({movie}) {

    const history = useHistory();
    const dispatch = useDispatch();


    // TODO turn this component into a movie item, complete dispatch saga
    // create an onclicj to send to actual details page which will show the get ID specific info
    // on that page
    const setMovieDetails = () => {
        console.log('movie.id', movie.id)
        dispatch({
            type: 'FETCH_MOVIE_DETAILS',
            payload: movie.id
        })
        history.push('/details')
    }

    return (
        <>
        {/* conditional rendering for if movie is undefined or not */}
        {movie &&
        <div>
            <h3>{movie.title}</h3>
            <img
                src={movie.poster}
                alt={movie.title}
            // onClick runs get deatils which is stored in store and then
            // used in the movieDetails component
            onClick={setMovieDetails}
            />
        </div>
        }
        </>
    )
}

export default MovieItem;