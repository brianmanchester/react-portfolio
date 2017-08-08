import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Body = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default Body;