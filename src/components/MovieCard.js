import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';


class MovieCard extends Component {
  constructor(props) {
    super(props)
      this.state = {
        favourites: false,
        watchLater: false
      };
    }

    componentDidMount = () => {
        if (this.props.user.favouriteMovies.includes(this.props.movie._id)){
          this.setState({
            favourites: true
          })
        }
        if (this.props.user.watchLater.includes(this.props.movie._id)){
          this.setState({
            watchLater: true
          })
        }
      }

    addToFavourites = async() => {
      try {
        await this.props.addMovieToFavourites(this.props.movie._id);
      } catch(error){
        console.log(error);
      } finally {
        this.setState({
          favourites: true
        })
      }
    }

    addToFavourites = async() => {
      try {
        await this.props.addMovieToFavourites(this.props.movie._id);
      } catch(error){
        console.log(error);
      } finally {
        this.setState({
          favourites: true
        })
      }
    }

    addToWatchLater = async() => {
      try {
        await this.props.addMovieToWatchLater(this.props.movie._id);
      } catch(error){
        console.log(error);
      } finally {
        this.setState({
          watchLater: true
        })
      }
    }

    render() {
      return (
        <div className="card-container">
          <h2><Link to={`/movies/${this.props.movie._id}`}>{this.props.movie.title}</Link></h2>
          <img src={this.props.movie.imgUrl} alt={this.props.movie.title}/>
          <div className="card-links">
            {this.state.favourites ? <p>Movie on favourites. Go to your <Link to={'/favourite'}>favourite movies list</Link></p> : <button className="button" onClick={this.addToFavourites}>Add to favourites</button>}
            {this.state.watchLater ? <p>Movie on your watch later list. Go to your <Link to={'/watch-later'}>watch later list</Link></p> : <button className="button" onClick={this.addToWatchLater}>Watch later</button>}
          </div>
        </div>
        )
      }
    }

export default withAuth(MovieCard);
