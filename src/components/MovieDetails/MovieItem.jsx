// Here make GET request to specific ID for the details of specific movie
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

// material UI
import './Details-Items.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// think about what only this component needs to run on its own
// A useEffect to dispatch on page load rather than on click of the card
// from the link to this specific page would have been much better approach

// Always need to deconstruct movie by placing it in an object!
function MovieItem({ movie }) {

    const history = useHistory();
    const dispatch = useDispatch();


    // turn this into a useEffect on page load rather than an onClick
    const setMovieDetails = () => {
        console.log('movie.id', movie.id)
        dispatch({
            type: 'FETCH_MOVIE_DETAILS',
            payload: movie.id
        })
        // would be better to push to a specific id instead of a general details page
        // Link is better than a button onClick if navigating to a certain page
        // button is better for a form fill out, link is for a direct link
        history.push('/details')
    }

    return (
        <>
            {/* conditional rendering for if movie is undefined or not */}
            {movie &&
                <Card sx={{ maxWidth: 200 }}
                    // onClick runs get deatils which is stored in store and then
                    // used in the movieDetails component
                    onClick={setMovieDetails}
                >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image={movie.poster}
                            alt={movie.title}
                        // onClick runs get deatils which is stored in store and then
                        // used in the movieDetails component

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {movie.title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            }
        </>
    )
}

export default MovieItem;