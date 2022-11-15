import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from './ProvideAuth';
import { LOGIN } from '@navigation/CONSTANTS';

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return auth.user ? <>{children}</> : <Redirect to={LOGIN} />;
      }}
    />
  );
}
export default PrivateRoute;
