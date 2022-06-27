import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { useHistory, Link } from 'react-router-dom';
import MovieItem from '../MovieDetails/MovieItem';

// Material UI
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


function MovieList() {
    // this is for material UI
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    console.log('movies', movies)

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    return (
        <main>
            <h1 className='header'>
                MovieList
            </h1>
                <Button 
                variant='contained'
                className="newMovie"
                onClick={() => { history.push('/newMovieForm') }}>
                    Add a New Movie
                </Button>
            {/* <section className="movies"> */}
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    {movies.map((movie) => {
                        // if remove {} can then get rid of the return, but the {} wil allow extra code inside the function block
                        return (
                            // Make the MovieItem a Link to /details/movie.id
                            <Grid
                                item xs={12} sm={6} md={4} lg={2}
                                key={movie.id}>
                                {/* <Item> */}
                                <MovieItem movie={movie} />
                                {/* </Item> */}
                            </Grid>
                        );
                    })}
                    {/* </section> */}
                </Grid>
            </Box>
        </main>

    );
}

export default MovieList;