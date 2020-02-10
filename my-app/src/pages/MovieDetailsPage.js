import React, { Component } from "react";
import MovieDetails from "../components/movie-details/MovieDetails";
import axios from "axios";
import CastPage from "./CastPage";
import { Route, Redirect } from "react-router-dom";
import ReviewsPage from "./ReviewsPages";

class MovieDetailsPage extends Component {
  state = { movies: [], isValid: true
};

  componentDidMount = () => {
    const { match } = this.props;
    const { movieId } = match.params;
    const BASE_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=cf7e1750a0f8b90bb35162b1428fcf90&language=en-US`;

    axios.get(BASE_URL).then(data =>
      this.setState({
        isValid:  this.props.match.params.id,
        movies: data.data
      })
      // this.setState({
      //   movies: data.data
      // })
    );
  };

  handleGoBack = () => {
    const { history } = this.props;
    history.goBack();
    // const { state } = this.props.location;
    // if (state) {
    //   this.props.history.push(this.props.location.state.from);
    //   // this.setState(prev=> ({
    //   //   movies: [...prev.movies]
    //   // }))
    //   return;
    // }
    
    // this.props.history.push({
    //   pathname: "/"
    //   // search: `?query=${movies.id}`
    // });

    // const { state } = this.props.location;
    // const { movies } = this.state;
    // console.log(this.props)

    // if (state) {
    //   this.props.history.push(state.from);
    //   return;
    // }

    // this.props.history.push({
    //   pathname: "/movies",
    //   search: `?query=${movies.id}`
    // });
    // this.props.history.push(this.props.location.state.from);
  };

  render() {
    const { movies } = this.state;
   
    return (
      <>
      {!this.props.match.url ? 
       <Redirect to='/'/> : <p>hm</p>}
        <MovieDetails movies={movies} onGoBack={this.handleGoBack} />
        <Route path={`${this.props.match.path}/cast`} component={CastPage} />
        <Route
          path={`${this.props.match.path}/reviews`}
          component={ReviewsPage}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
