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
				<div className="left">
					<img 
					src="https://1000marcas.net/wp-content/uploads/2020/01/Netflix-simbolo-600x338.jpg" 
					alt="" />
					<p>Homepage</p>
					<p>Series</p>
					<p>Movies</p>
				</div>
				<div className="right"></div>
			</div>
			
		</div>
	)
}

export default Navbar


// export default withAuth(Navbar);
