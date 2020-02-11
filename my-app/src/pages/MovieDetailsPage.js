import React, { Component } from "react";
import MovieDetails from "../components/movie-details/MovieDetails";
import axios from "axios";
import CastPage from "./CastPage";
import { Route, Redirect } from "react-router-dom";
import ReviewsPage from "./ReviewsPages";
const queryString = require("query-string");

class MovieDetailsPage extends Component {
  state = { movies: [], isValid: true, locationLink: "" };

  componentDidMount = async () => {
    if (this.props.location.state) {
      if (this.props.location.state.locationLink) {
        this.setState({
          locationLink: this.props.location.state.locationLink
        });
      }
    } else {
     
      this.setState({
        locationLink: this.props.location.pathname
      });
   
    }
    const { match } = this.props;
    const { movieId } = match.params;
    const BASE_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=cf7e1750a0f8b90bb35162b1428fcf90&language=en-US`;

    try {
      await axios.get(BASE_URL).then(data =>
        this.setState({
          isValid: this.props.match.params.id,
          movies: data.data
        })
      );
    } catch (e) {
      console.log("ERRROR", e);
    }
  };

  handleGoBack = () => {
    const { history } = this.props;
    const { match } = this.props;
    const { movieId } = match.params;
    // history.push(this.state.locationLink);

    console.log(this.props.history.location.pathname)
if( this.props.history.location.pathname){
  // if(this.props.location.pathname/(`${movieId}`) ){
    history.push(this.state.locationLink);
// }  
}

else{
  history.push('/movies')
}
    //   if (this.state.locationLink){
    //     history.push(this.state.locationLink);
    // }

    // this.props.location.state) {
    //   if (this.props.location.state.locationLink

    // else{
    //   console.log('aaaaa')
    //   history.push('/')
    // }
    // if (this.props.location.state) {
    //   if (this.props.location.state.locationLink) {
    // history.push(this.state.locationLink);
    // if(!this.props.location.state){

    //   history.push('/')
    // }
    //   }
    // }
    // else{
    //   history.push('/')
    // }
    // this.props.history.push("/");

    //  const { state } = this.props.location;
    //  console.log(state)
    //  state.from.locationLink;
    //  if (state) {
    //      this.props.history.push(this.props.history.location.pathname)
    //     }
    //   console.log(this.props.history.location.pathname)
    // // const { movies } = queryString.parse(this.props.location.pathname);
    // // console.log(this.props.location.pathname)
    // // console.log('this.props.location', this.props.location)
    // if (state) {
    //    this.props.history.push(this.props.history.location.pathname)

    //   }
    // else{
    //   this.props.history.push({
    //     pathname: '/movies',
    //       search: `?query=${this.state.movies.id}`
    //   })
    // }
  };

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

  render() {
    const { movies } = this.state;

    return (
      <>
        {!this.props.match.url && <Redirect to="/" />}
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
