import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';

const App = () => (
  <BrowserRouter>
    <Route exact path="/">
      <Home />
    </Route>

    <Route path="/about">
      <About />
    </Route>
  </BrowserRouter>
);

export default App;
