import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { useHistory, Link} from 'react-router-dom';
import MovieDetails from '../MovieDetails/MovieDetails';

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map((movie) => {
                    return (
                        
                            <MovieDetails key={movie.id} movie={movie}/>
                        
                        
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;