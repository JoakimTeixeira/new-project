import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, About, Contact } from 'pages';

const App = () => (
  <BrowserRouter>
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
