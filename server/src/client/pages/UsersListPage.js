import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from "react-helmet";

class UserListPage extends React.Component {
	componentDidMount() {
		this.props.fetchUsers();
	}

	renderUsers() {
		return this.props.users.map(user => {
			return <li key={user.id}>{user.name}</li>
		});
	}

	render() {
		return (
			<div>
				<Helmet>
					<title>Parsclick SSR - Users</title>
					<meta property="og:title" content="Parsclick SSR - Users" />
				</Helmet>
				<h3>Users List</h3>
				<ul>{this.renderUsers()}</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { users: state.users };
}

function loadData(store) {
	return store.dispatch(fetchUsers());
}

export default {
	loadData,
	component: connect(mapStateToProps, { fetchUsers })(UserListPage),
};
