import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
	staticContext.notFound = true;

	return (
		<h1 className="center-align" style={{ marginTop: '200px' }}>
			Page Not Found!
		</h1>
	);
};

export default {
	component: NotFoundPage
};
