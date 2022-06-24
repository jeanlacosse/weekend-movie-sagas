// Here make GET request to specific ID for the details of specific movie
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MovieItem(movie) {

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(movie)
    })


    // TODO turn this component into a movie item, complete dispatch saga
    // create an onclicj to send to actual details page which will show the get ID specific info
    // on that page
    const setMovieDetails = () => {
        dispatch({
            type: 'FETCH_MOVIE_DETAILS',
            payload: movie.id
        })
        history.push('/details')
    }

    return (

        <div  >
            <h3>{movie.movie.title}</h3>
            <img
                src={movie.movie.poster}
                alt={movie.movie.title}
            // onClick runs get deatils which is stored in store and then
            // used in the movieDetails component
            onClick={setMovieDetails}
            />
        </div>
    )
}

export default MovieItem;