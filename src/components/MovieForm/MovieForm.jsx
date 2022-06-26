import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// material ui
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import '../App/App.css'

function MovieForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const genres = useSelector(store => store.genres);

    const [newMovieData, setNewMovieData] = useState({})

    // These functions set state for the new movie object values
    const handleMovieData = (event) => {
        setNewMovieData({ ...newMovieData, [event.target.name]: event.target.value })
    }

    const addNewMovie = (event) => {
        event.preventDefault();
        console.log('new movie data', newMovieData)
        dispatch({
            type: 'ADD_NEW_MOVIE',
            payload: newMovieData
        })

        history.push('/');
    }

    return (
        <>
            <h2>Enter information to add a movie here</h2>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '30ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={(event) => addNewMovie(event)}
            >

                <TextField
                    required
                    id="filled-required"
                    label="Required"
                    placeholder='Movie Title'
                    variant="filled"
                    onChange={handleMovieData}
                    name="title"
                />

                <TextField
                    required
                    id="filled-required"
                    label="Required"
                    placeholder='Movie Img URL'
                    variant="filled"
                    onChange={handleMovieData}
                    name="poster"
                />

                <TextField
                    required
                    id="filled-required"
                    label="Required"
                    placeholder='Movie Description'
                    variant="filled"
                    onChange={handleMovieData}
                    name="description"
                />

                <TextField
                    id="filled-select-currency"
                    select
                    label="Select"
                    helperText="Please select your genre"
                    variant="filled"
                    onChange={handleMovieData}
                    name="genre_id"
                    value={1}
                    
                >
                    {genres.map((option) => (
                        <MenuItem  key={option.id} value={option.id}>
                            {option.name}
                        </MenuItem>
                    ))}
                </TextField>

                <Button 
                type='submit' 
                variant='contained'
                className='saveNewMovie'
                >Save New Movie</Button>

            </Box>

            <Button
                onClick={() => { history.push('/') }}
            >Cancel</Button>
        </>
    )
}

export default MovieForm