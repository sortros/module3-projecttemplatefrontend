// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
//
// import { withAuth } from '../providers/AuthProvider';

// class Navbar extends Component {
//	render() {
//		const { user, isLoggedIn, logout } = this.props;
//		return (
//			<div>
//				{isLoggedIn ? (
//					<>
//						<p>username: {user.username}</p>
//						<button onClick={logout}>Logout</button>
//					</>
//				) : (
//					<>
//						<Link to="/login">Login</Link>
//						<Link to="/signup">Signup</Link>
//					</>
//				)}
//			</div>
//		);
//	}
// }
import React from 'react'
import './Navbar.css'

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="container">
				<div className="navLeft">
					<div className="navLogo"> <img className="navImgLogo" src="https://1000marcas.net/wp-content/uploads/2020/01/Netflix-simbolo.jpg" alt="" /></div>
					<div className="navHome">   <p>Homepage</p> </div>
					<div className="navSeries"> <p>Series</p> </div>
					<div className="navMovies"> <p>Movies</p> </div>
				</div>
				<div className="navRight"></div>
			</div>
		</div>
	)
}

export default Navbar


// export default withAuth(Navbar);
