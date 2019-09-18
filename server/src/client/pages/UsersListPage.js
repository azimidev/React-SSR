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

	head() {
		return (
			<Helmet>
				<title>{`Parsclick SSR - ${this.props.users.length} Users`}</title>
				<meta property="og:title" content="Parsclick SSR - Users" />
			</Helmet>
		);
	}

	render() {
		return (
			<div>
				{this.head()}
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
