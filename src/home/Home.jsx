import React, { Component } from 'react';
import movieClient from '../lib/movieClient';
import './Home.css';
 
 class Home extends Component {
    constructor(props) {
    super(props)
      this.state = {
        movies: []
      };
    }

    componentDidMount = async() => {
      try {
        const movies = await movieClient.getMovies();
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
         {this.state.movies.map(movie => {
           return <p key={movie._id}>{movie.title}</p>
          //  return <MovieCard movie={movie}/>
         })}
       </div>
     );
   }
 }
 
 export default Home;
 

