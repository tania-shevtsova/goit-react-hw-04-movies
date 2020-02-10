import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Loader from "./pages/Loader";

import Home from "./pages/HomePage";

  /* MAKE REDIRECT */


// const AsyncHomePage = lazy(() => import("./pages/HomePage"));
const AsyncMovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const AsyncMoviesPage = lazy(() => import("./pages/MoviesPage"));
const AsyncNotFound = lazy(() => import("./pages/NotFound"));

// const AsyncHomePage=Loadable({
//   loader: ()=> import('./pages/HomePage' /* webpackChunkName: "home-page" */),
//   loading: Loader
// })

// const AsyncMovieDetailsPage=Loadable({
//   loader: ()=> import('./pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */),
//   loading: Loader
// })

// const AsyncMoviesPage=Loadable({
//   loader: ()=> import('./pages/MoviesPage' /* webpackChunkName: "movie-details-page" */),
//   loading: Loader
// })

// const AsyncNotFound=Loadable({
//   loader: ()=> import('./pages/NotFound' /* webpackChunkName: "movie-details-page" */),
//   loading: Loader
// })

const App = () => (
  <>
    <Nav />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies/:movieId" component={AsyncMovieDetailsPage} />
        <Route path="/movies" component={AsyncMoviesPage} />
        {/* <Route component={AsyncNotFound} /> */}
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </>
);

export default App;
