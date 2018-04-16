import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/home';
import PostPage from './pages/post';
import CategoryPage from './pages/category';
import NoMatch from './pages/404';

const LayoutRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <Layout>
          <Component {...matchProps} />
      </Layout>
    )} />
  )
};

const routes = (
  <Switch>
    <LayoutRoute exact path='/' component={HomePage}/>
    <LayoutRoute path='/:category/:post_id' component={PostPage}/>
    <LayoutRoute path='/:category' component={CategoryPage}/>
    <LayoutRoute component={NoMatch} />
  </Switch>
);

export default routes;
