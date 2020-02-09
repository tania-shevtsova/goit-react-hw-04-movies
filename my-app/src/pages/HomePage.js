import React, {Component} from 'react';
import axios from 'axios';
import Home from '../components/home-page/Home';

const BASE_URL="https://api.themoviedb.org/3/trending/all/day?api_key=cf7e1750a0f8b90bb35162b1428fcf90";

class HomePage extends Component {

    state = { movies: [] };

    componentDidMount() {
     
        axios.get(BASE_URL).then(data=>{
            this.setState({
            movies: data.data.results
        })});
    }

  

    render() {
        const {movies}=this.state;
        return (
            <>
            <Home movies={movies} />
            </>
        );
    }
}

export default HomePage;