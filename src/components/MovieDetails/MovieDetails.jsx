import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {

    const movieDetails = useSelector(store => store.movieDetails);
    console.log('movieDetails', movieDetails)

    return (
        <>
        {/* conditional rendering on page load to see if the array for movieDetails
        is empty or not, if not empty it will append info to dom */}
            {movieDetails.length !== 0 &&
                <div>
                    <h1>here is some stuff</h1>
                    <p>{movieDetails[0].title}
                        {movieDetails[0].description}
                        <img src={movieDetails[0].poster} alt="" />
                    </p>
                </div>
            }
        </>
    )
}

export default MovieDetails