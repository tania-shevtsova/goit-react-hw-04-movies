import React, { Component } from "react";
import MovieDetails from '../components/movie-details/MovieDetails';
import axios from "axios";
import CastPage from './CastPage';
import {Route} from 'react-router-dom';
import ReviewsPage from './ReviewsPages';

class MovieDetailsPage extends Component {
  state = { movies: [] };

  componentDidMount = () => {
    const { match } = this.props;
    const { movieId } = match.params;
    const BASE_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=cf7e1750a0f8b90bb35162b1428fcf90&language=en-US`;

    axios.get(BASE_URL).then(
      data =>
        this.setState({
          movies: data.data
        })
    );
  };

  handleGoBack=()=>{
      this.props.history.push('/');
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <MovieDetails movies={movies} onGoBack={this.handleGoBack}/>
        <Route path={`${this.props.match.path}/cast`} component={CastPage}/>
        <Route path={`${this.props.match.path}/reviews`} component={ReviewsPage}/>
      </>
    );
  }
}

export default MovieDetailsPage;
