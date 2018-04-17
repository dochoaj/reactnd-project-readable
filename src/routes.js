import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import ListPage from './pages/list';
import PostPage from './pages/post';
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
    <LayoutRoute exact path='/' component={ListPage}/>
    <Route exact path='/404' component={NoMatch} />
    <LayoutRoute exact path='/:category/:post_id' component={PostPage}/>
    <LayoutRoute exact path='/:category' component={ListPage}/>
  </Switch>
);

export default routes;
