import axios from 'axios';

class MovieClient {
	constructor() {
		this.movieClient = axios.create({
			baseURL: process.env.REACT_APP_API_URI,
			withCredentials: true,
		});
	}

	getMovies() {
		return this.movieClient.get('/movies').then(response => response.data);
	}

	getSingleMovie(id){
		return this.movieClient.get(`/movies/${id}`).then(response => response.data);
	}

	createMovie(body){
		return this.movieClient.post('/movies', body).then(response => response.data);
	}

	editMovie(id, body){
		return this.movieClient.put(`/movies/edit/${id}`, body).then(response => response.data);
	}

	getFavouriteMovies(){
		return this.movieClient.get('/user/favourite').then(response => response.data);
	}

	getWatchLaterMovies(){
		return this.movieClient.get('/user/watchlater').then(response => response.data);
	}

	addMovieToFavourites(id){
		return this.movieClient.post(`/user/favourite/${id}`).then(response => response.data);
	}

	addMovieToWatchLater(id){
		return this.movieClient.post(`/user/watchlater/${id}`).then(response => response.data);
	}

	deleteMovie(id){
		return this.movieClient.delete(`/movies/${id}`).then(response => response.data);
	}

}

const movieClient = new MovieClient();

export default movieClient;
