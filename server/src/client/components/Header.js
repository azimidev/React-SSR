import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const Header = ({ auth }) => {

	const authButton = auth
		? <a href="/api/logout">Logout</a>
		: <a href="/api/auth/google">Login</a>;

	return (
		<div>
			<Link to="/">React SSR</Link>
			<div>
				<Link to="/users">Users</Link>
				<Link to="/admins">Admins</Link>
				{authButton}
			</div>
		</div>
	);
};

function mapStateToProps({ auth }) {
	return { auth: auth };
}

export default connect(mapStateToProps)(Header);
