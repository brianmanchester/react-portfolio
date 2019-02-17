import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Body = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default Body;