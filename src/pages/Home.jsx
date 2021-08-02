import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import movieClient from '../lib/movieClient';
import MovieCard from '../components/MovieCard';
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
       <main>
          <Link to="/new"> 
            <button className="button">Add new movie</button>
          </Link>
          <div>
                {this.state.movies.map(movie => {
              return <MovieCard key={movie._id} movie={movie} />
            })}

          </div>
       </main>
     );
   }
 }
 
 export default Home;
 

