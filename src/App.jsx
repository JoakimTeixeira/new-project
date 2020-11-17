import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, About, Contact } from 'pages';
import NavBar from 'components/NavBar';

const App = () => (
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
    </Switch>
  </BrowserRouter>
);

export default App;
