import Books from 'components/Books';
import Cats from 'components/Cats';
import Recipes from 'components/Recipes';
import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogRoutes = ({ path }) => (
  <Switch>
    <Route path={`${path}/recipes`} component={Recipes} />
    <Route path={`${path}/cats`} component={Cats} />
    <Route path={`${path}/books`} component={Books} />
  </Switch>
);

export default BlogRoutes;

BlogRoutes.propTypes = {
  path: PropTypes.string.isRequired,
};
