import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieForm from '../MovieForm/MovieForm';

function App() {
  return (
    <div className="App">
      <h1 className='header'>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/details" exact>
          <MovieDetails />
        </Route>
        {/* Add Movie page */}
        <Route path="/newMovieForm" exact>
          <MovieForm />
        </Route>
      </Router>
    </div>
  );
};



export default App;
