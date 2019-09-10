import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UserList extends React.Component {
	componentDidMount() {
		// this.props.fetchUsers();
	}

	renderUsers() {
		return this.props.users.map(user => {
			return <li key={user.id}>{user.name}</li>
		});
	}

	render() {
		return (
			<div>
				<ul>
					{this.renderUsers()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { users: state.users };
}

export default connect(mapStateToProps, { fetchUsers })(UserList);