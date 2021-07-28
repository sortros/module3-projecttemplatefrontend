import React, { Component } from 'react';
import movieClient from '../lib/movieClient';
import { Link } from 'react-router-dom';

 class SingleMovie extends Component {
    constructor(props) {
    super(props)
      this.state = {
        movie: {}
      };
    }

    componentDidMount = async() => {
      const { movieId } = this.props.match.params;
      try {
        const movie = await movieClient.getSingleMovie(movieId);
        console.log(movie)
        this.setState({
          movie
        })
      } catch(error){
        console.log(error);
      }
    }

    handleDelete = async() => {
      const { movieId } = this.props.match.params;
      try {
        await movieClient.deleteMovie(movieId);
      } catch(e){
         console.log(e);
      } finally {
        this.props.history.push('/home');
      }
    }

   render() {
     const { title, score, duration, director, imgUrl, year, _id } = this.state.movie;
     return (
       <div>
         <img width="200px" src={imgUrl} alt={title}/>
         <h1>Title: {title}</h1>
         <p>Rated {score}</p>
         <p>Duration: {duration}</p>
         <p>Directed by {director} in {year}</p>
         <Link to={`/edit/${_id}`}><button>Edit this movie</button></Link>
         <button onClick={this.handleDelete}>Delete this movie</button>
       </div>
     );
   }
 }
 
 export default SingleMovie;
 

