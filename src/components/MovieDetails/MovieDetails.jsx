import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

function MovieDetails() {

    const history = useHistory();
    const movieDetails = useSelector(store => store.movieDetails);
    console.log('movieDetails', movieDetails)

    return (
        <>
            {/* conditional rendering on page load to see if the array for movieDetails
        is empty or not, if not empty it will append info to dom */}
            {movieDetails.length !== 0 &&

                <div>

                    <h2>{movieDetails[0].title}</h2>
                    <h3>Genres:
                        {movieDetails[0].all_genres.map((genre) => {
                            return (
                                <span key={genre}>{genre} </span>
                            )
                        })}
                    </h3>
                    <p>
                        {movieDetails[0].description}
                    </p>
                    <img src={movieDetails[0].poster} alt="" />

                </div>
            }
            <button
                onClick={() => { history.push('/') }}>
                Go back to list</button>
        </>
    )
}

export default MovieDetails