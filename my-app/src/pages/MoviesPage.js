import React, { Component } from "react";
import axios from "axios";
import shortid from "shortid";
import { NavLink } from "react-router-dom";
const queryString = require("query-string");

const activeStyle = {
  color: "palevioletred"
};

const inputStyle = {
  width: "250px"
};

class MoviesPage extends Component {
  state = {
    movies: [],
    value: "",
    error: ""
  };

  componentDidMount = () => {
    const { location } = this.props;
    const { query } = queryString.parse(location.search);
    const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=cf7e1750a0f8b90bb35162b1428fcf90&language=en-US&page=1&include_adult=false&query=${query}`;

    if (query) {
      axios
        .get(BASE_URL)
        .then(movies => {
           if (movies.data.results.length!==0) {
        
          this.setState({
            movies: movies.data.results
          });
        }
        else {
            console.log("NOTHING was found");
        }
        })
        .catch(this.state.error);
    } 
    
    console.log(this.props);
  };

  componentDidUpdate = prevProps => {
    const { location } = this.props;
    const { query } = queryString.parse(location.search);
    const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=cf7e1750a0f8b90bb35162b1428fcf90&language=en-US&page=1&include_adult=false&query=${query}`;

    if (prevProps.location.search !== location.search) {
      axios
        .get(BASE_URL)
        .then(movies =>
          this.setState({
            movies: movies.data.results
          })
        )

        .catch(this.state.error);
    }
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    
    this.setState({
      value: ""
    });

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.value}`
    });
  };

  render() {
    const { value, movies } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            style={inputStyle}
            onChange={this.handleChange}
            value={value}
          ></input>
          <button type="submit">Search</button>
        </form>
        <ul>
          {console.log("movies", movies)}
          {movies.map(el => (
            <li key={shortid()}>
              <NavLink
                to={{
                  pathname: `/movies/${el.id}`,
                  state: { from: this.props.location }
                }}
                activeStyle={activeStyle}
              >
                {el.original_title}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
