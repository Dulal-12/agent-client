import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { user } from '../../App';

const PrivateRoute = ({children,...rest}) => {
    const [loggedInuser,setLoggedInuser] = useContext(user);
    return (
        <Route
        {...rest}
        render={({ location }) =>
         loggedInuser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;