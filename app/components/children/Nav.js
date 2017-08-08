import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav id="top">
            <div className="container">
              <div className="nav-wrapper">
                <a href="/" className="brand-logo center">Brian Manchester</a>
                <a data-activates="mobile" className="button-collapse"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="hide-on-med-and-down">
                  <li><a className="valign-wrapper" href="assets/files/Brian_Manchester_Resume.pdf" target="_blank"><i className="material-icons left">assignment</i>CV</a></li>
                  <li><a className="valign-wrapper" href="https://www.linkedin.com/in/brian-l-manchester/" target="_blank"><img src="assets/img/linkedin_icon.png" className="icon left" />LinkedIn</a></li>
                  <li><a className="valign-wrapper" href="https://github.com/bmanch" target="_blank"><img src="assets/img/github_icon.png" className="icon left" />Github</a></li>
                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/portfolio">Apps</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <ul className="side-nav" id="mobile">
          <li><a className="valign-wrapper" href="assets/files/Brian_Manchester_Resume.pdf" target="_blank"><i className="material-icons left sidecon">assignment</i>CV</a></li>
          <li><a className="valign-wrapper" href="https://www.linkedin.com/in/brian-l-manchester/" target="_blank"><img src="assets/img/linkedin_icon.png" className="icon left" />LinkedIn</a></li>
          <li><a className="valign-wrapper" href="https://github.com/bmanch" target="_blank"><img src="assets/img/github_icon.png" className="icon left" />Github</a></li>
        </ul>
      
        <div className="navbar-fixed">
          <nav className="hide-on-large-only" id="white">
            <div className="container">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/portfolio">Apps</Link></li>
                <li><Link to="/portfolio">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div> 
    );
  }
};

export default Nav;