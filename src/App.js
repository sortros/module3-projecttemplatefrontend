import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
// import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { withAuth } from './providers/AuthProvider';
import Home from './pages/Home';
import FavouriteMovies from './pages/FavouriteMovies';
import WatchLaterMovies from './pages/WatchLaterMovies';
import SingleMovie from './pages/SingleMovie';
import CreateMovie from './pages/CreateMovie';
import EditMovie from './pages/EditMovie';

class App extends Component {
	render() {
		const { isLoading } = this.props;
		if (isLoading) {
			return <div>loading ... </div>;
		}
		return(
			<div className="home">
				<Navbar/>
				<Switch>
					<AnonRoute exact path="/signup" component={Signup} />
					<Route exact path="/home" component={Home} />
					<PrivateRoute exact path="/favourite" component={FavouriteMovies} />
					<PrivateRoute exact path="/watch-later" component={WatchLaterMovies} />
					<PrivateRoute exact path="/new" component={CreateMovie} />
					<PrivateRoute exact path="/movies/:movieId" component={SingleMovie} />
					<PrivateRoute exact path="/edit/:movieId" component={EditMovie} />
					<AnonRoute exact path="/login" component={Login} />
				</Switch>
			</div>
		);
	}
}

export default withAuth(App);
