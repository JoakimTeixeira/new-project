import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => (
  <BrowserRouter>
    <Route path="/">
      <Home />
    </Route>
  </BrowserRouter>
);

export default App;
