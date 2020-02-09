import React from "react";
import shortid from "shortid";
import {Link} from 'react-router-dom';

const header={
    margin: '0'
}

const Home = ({ movies = [] }) => (
  <>
    <h2 style={header}>Trending today</h2>
    <ul>
      {movies.map(el => (
        <li key={shortid()}><Link to={`/movies/${el.id}`}>{el.title}{el.name}</Link></li>
      ))}
    </ul>
  </>
);

export default Home;
