import { NavBar } from 'components';
import {
  About, Admin, Blog, Contact, Home,
} from 'pages';
import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => (
  <BrowserRouter>
    <NavBar />

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/blog">
        <Blog />
      </Route>

      <PrivateRoute path="/admin">
        <Admin />
      </PrivateRoute>
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
