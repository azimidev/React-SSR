import React from 'react';
import { fetchAdmins } from '../actions';
import { connect } from 'react-redux';
import requireAuth from '../components/hocs/requireAuth';

class AdminsListPage extends React.Component {
	componentDidMount() {
		this.props.fetchAdmins();
	}

	renderAdmins() {
		return this.props.admins.map(admin => {
			return <li key={admin.id}>{admin.name}</li>
		});
	}

	render() {
		return (
			<div>
				<h3>Protected list of admins</h3>
				<ul>{this.renderAdmins()}</ul>
			</div>
		);
	}
}

function mapStateToProps({ admins }) {
	return { admins };
}

export default {
	component: connect(mapStateToProps, { fetchAdmins })(
		requireAuth(AdminsListPage)
	),
	loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
