import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Home, About, Contact, Blog, Admin,
} from 'pages';
import { NavBar } from 'components';
import { AuthContextProvider } from 'contexts/AuthContext';
import PrivateRoute from 'routes/PrivateRoute';

const App = () => (
  <AuthContextProvider>
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
  </AuthContextProvider>
);

export default App;
