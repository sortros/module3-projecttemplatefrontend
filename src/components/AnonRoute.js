import React from 'react';
import { Route } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';

function AnonRoute({ component: Component, isLoggedIn, ...rest }) {
	return <Route {...rest} render={props => (!isLoggedIn && <Component {...props} /> )} />;
}

export default withAuth(AnonRoute);
