import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Contacts from './components/Contacts/Contacts';
import UserMenu from './components/UserMenu/UserMenu';
import { fetchCurrentUser } from './redux/authSlice';

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      {isLoggedIn && <UserMenu />}
      <Switch>
        <Route path="/register">
          {isLoggedIn ? <Redirect to="/contacts" /> : <Register />}
        </Route>
        <Route path="/login">
          {isLoggedIn ? <Redirect to="/contacts" /> : <Login />}
        </Route>
        <Route path="/contacts">
          {isLoggedIn ? <Contacts /> : <Redirect to="/login" />}
        </Route>
        <Route path="/">
          {isLoggedIn ? <Redirect to="/contacts" /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </div>
  );
};

export default App;