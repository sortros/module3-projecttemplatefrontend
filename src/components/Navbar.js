import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

class Navbar extends Component {
	render() {
		const { user, isLoggedIn, logout } = this.props;
		return (
			<nav>
				<div className="navLogo">
				  <Link to="/home">
						<img className="navImgLogo" src="https://1000marcas.net/wp-content/uploads/2020/01/Netflix-simbolo.jpg" alt="" />
					</Link>
				</div>
				{isLoggedIn ? (
					<div className="navbar-content">
							<p>Welcome {user.username}</p>
							<button className="button" onClick={logout}>Logout</button>
					</div>

				) : (
					<div className="navbar-content">
						<Link to="/login">Login</Link>
						<Link to="/signup">
							<button className="button">Signup</button>
						</Link>
					</div>
				)}
			</nav>
		);
	}
}
// import React from 'react'
// import './Navbar.css'

// const Navbar = () => {
// 	return (
// 		<div className="navbar">
// 			<div className="container">
// 				<div className="navLeft">
// 					<div className="navLogo"> <img className="navImgLogo" src="https://1000marcas.net/wp-content/uploads/2020/01/Netflix-simbolo.jpg" alt="" /></div>
// 					<div className="navHome">   <p>Homepage</p> </div>
// 					<div className="navSeries"> <p>Series</p> </div>
// 					<div className="navMovies"> <p>Movies</p> </div>
// 				</div>
// 				<div className="navRight"></div>
// 			</div>
// 		</div>
// 	)
// }

// export default Navbar


export default withAuth(Navbar);
