import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useRouteMatch, NavLink } from 'react-router-dom';
import BlogRoutes from 'routes/BlogRoutes';

const Blog = () => {
  const { path, url } = useRouteMatch();

  return (
    <section className="m-4">
      <h1>Blog</h1>
      <ListGroup className="mb-4">
        <ListGroup.Item action as={NavLink} to={`${url}/recipes`}>Recipes</ListGroup.Item>
        <ListGroup.Item action as={NavLink} to={`${url}/cats`}>Cats</ListGroup.Item>
        <ListGroup.Item action as={NavLink} to={`${url}/books`}>Books</ListGroup.Item>
      </ListGroup>

      <BlogRoutes path={path} />
    </section>
  );
};

export default Blog;
