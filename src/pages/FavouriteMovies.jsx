import React, { Component } from 'react';
import movieClient from '../lib/movieClient';

class FavouriteMovies extends Component {
   constructor(props) {
    super(props)
      this.state = {
        movies: []
      };
    }

    componentDidMount = async() => {
      try {
        const movies = await movieClient.getFavouriteMovies();
        this.setState({
          movies
        })
      } catch(error){
        console.log(error);
      }
    }

  render() {
    return (
      <div>
        <h1>My favourite movies</h1>
        <ul>
          {this.state.movies.map(movie => {
            return <li key={movie._id}>{movie.title}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default FavouriteMovies;
