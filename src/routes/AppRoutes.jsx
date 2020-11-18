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
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <PrivateRoute path="/admin" component={Admin} />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
