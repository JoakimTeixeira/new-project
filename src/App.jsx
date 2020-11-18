import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Home, About, Contact, Blog,
} from 'pages';
import { NavBar } from 'components';
import { AuthContextProvider } from 'contexts/AuthContext';

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
      </Switch>
    </BrowserRouter>
  </AuthContextProvider>
);

export default App;
