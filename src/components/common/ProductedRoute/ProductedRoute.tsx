import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { environment } from '../../../environment/environment';
import Token from '../../../utils/token.util';

export const ProductedRoute = ({ component: Component, ...rest }) => {
  const token =
    Token.getToken(environment.constants.access_token_variable_name) || null;
  console.log('ProductedRoute -> token', token);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) return <Component {...props} />;
        else {
          return (
            <Redirect
              to={{ pathname: '/users/auth', state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};
