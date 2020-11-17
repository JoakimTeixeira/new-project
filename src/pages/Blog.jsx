import React from 'react';
import { ListGroup } from 'react-bootstrap';
import {
  Route, Switch, useRouteMatch, NavLink,
} from 'react-router-dom';
import { Recipes } from 'components';

const Blog = () => {
  const { path, url } = useRouteMatch();

  return (
    <section className="m-4">
      <h1>Blog</h1>
      <ListGroup className="mb-4">
        <ListGroup.Item action as={NavLink} to={`${url}/recipes`}>Recipes</ListGroup.Item>
        <ListGroup.Item action>Cats</ListGroup.Item>
        <ListGroup.Item action>Books</ListGroup.Item>
      </ListGroup>

      <Switch>
        <Route path={`${path}/recipes`}>
          <Recipes />
        </Route>
      </Switch>
    </section>
  );
};

export default Blog;
