import React, { Component } from 'react';
import movieClient from '../lib/movieClient';

class EditMovie extends Component {
  constructor(props) {
    super(props)
      this.state = {
        title: "",
        director: "",
        year: "",
        duration: "",
        score: "",
        stringGenre: "",
        imgUrl: undefined
      };
    }

    componentDidMount = async() => {
      const { movieId } = this.props.match.params;
      console.log(this.props)
      try {
        const movie = await movieClient.getSingleMovie(movieId);
        this.setState({
          title: movie.title,
          director: movie.director,
          year: movie.year,
          duration: movie.duration,
          score: movie.score,
          stringGenre: movie.genre.toString(),
          imgUrl: movie.imgUrl || undefined
        })
      } catch(error){
        console.log(error);
      }
    }

    handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    };

    handleSubmit = async (event) => {
    event.preventDefault();
    const { movieId } = this.props.match.params;
    const { title, director, year, duration, stringGenre, score, imgUrl } = this.state;
    const genre = stringGenre.split(',');
    try {
      const movie = await movieClient.editMovie(movieId, { title, director, year, duration, score, genre, imgUrl });
      this.props.history.push(`/movies/${movie._id}`);
    } catch(e){
      console.log(e);
    } 
  }

  render() {
    const { title, director, year, duration, score, stringGenre, imgUrl } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <label>Director:</label>
        <input
          type="text"
          name="director"
          value={director}
          onChange={this.handleChange}
        />
        <label>Year:</label>
        <input
          type="number"
          name="year"
          value={year}
          onChange={this.handleChange}
        />
        <label>Duration:</label>
        <input
          type="text"
          name="duration"
          value={duration}
          onChange={this.handleChange}
        />
        <label>Score:</label>
        <input
          type="number"
          name="score"
          value={score}
          onChange={this.handleChange}
        />
        <label>Genres (separated by commas):</label>
        <input
          type="text"
          name="stringGenre"
          value={stringGenre}
          onChange={this.handleChange}
        />
        <label>Image url:</label>
        <input
          type="text"
          name="imgUrl"
          value={imgUrl}
          onChange={this.handleChange}
        />
        <input type="submit" value="Save changes" />
      </form>
      </div>
    );
  }
}

export default EditMovie;
