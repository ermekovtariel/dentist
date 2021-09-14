import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import RegistrationComponent from './components/RegistrationComponent';
import Deteil from './pages/DeteilPage';
import Home from './pages/HomePage';

export const useRoutes = (isAuthed) => {
  if (isAuthed) {
    return (
      <Switch>
        <Route path='/home' exact>
          <Home />
        </Route>
        <Route path='/deteil/:id'>
          <Deteil />
        </Route>
        <Redirect to='/home' />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path='/login' exact>
        <LoginComponent />
      </Route>
      <Route path='/registration' exact>
        <RegistrationComponent />
      </Route>
    </Switch>
  );
};
