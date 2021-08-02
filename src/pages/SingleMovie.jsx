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
       <main>
         <img width="200px" src={imgUrl} alt={title}/>
         <div className="singleMovie-details">
            <h1>Title: {title}</h1>
            <p>Rated {score}</p>
            <p>Duration: {duration}</p>
            <p>Directed by {director} in {year}</p>
         </div>
         <div className="card-links">
          <Link to={`/edit/${_id}`}><button className="button">Edit this movie</button></Link>
          <button className="button" onClick={this.handleDelete}>Delete this movie</button>
       </div>
       </main>
     );
   }
 }
 
 export default SingleMovie;
 

