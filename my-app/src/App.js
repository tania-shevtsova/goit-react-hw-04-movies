import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Nav from './components/nav/Nav';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFound from './pages/NotFound';
import MoviesPage from './pages/MoviesPage';

const App = () => (
  <>
  <Nav />
  <Switch>
  <Route path="/" exact component={HomePage} />
  <Route path="/movies/:movieId" component={MovieDetailsPage} />
  <Route path="/movies" component={MoviesPage} />
  <Route component={NotFound}/>
  </Switch>
  </>
);

export default App;
