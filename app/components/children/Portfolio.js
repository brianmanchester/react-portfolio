import React, { Component } from 'react';

class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.tooltipped').tooltip({delay: 50});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m12 l8 offset-l2 center-align">
            <h4>Portfolio</h4>
            <h6>I have made more apps (both web and CLI) than those shown below, but what you see below is a good representation of my work. Three apps—Doppelgänger, Truckin' Good, and Aardvark—were created with a team.</h6>
            <br />
            <div className="divider"></div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m12 l4">
            <div className="card small hoverable sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="assets/img/dopple.png" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4"><strong>Doppelgänger</strong><i className="material-icons right">keyboard_arrow_up</i></span>
              </div>
              <div className="card-action">
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="go to the app" href="https://doppelgaenger.herokuapp.com/" target="_blank"><i className="material-icons">desktop_mac</i></a>
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="see the code on github" href="https://github.com/Doppelganger-App/Doppelganger" target="_blank"><i className="material-icons">code</i></a>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"><strong>Doppelgänger</strong><i className="material-icons right">close</i></span>
                <p><strong>Technologies...</strong></p>
                <ul>
                  <li>MongoDB and Mongoose</li>
                  <li>Passport.js and Bcrypt (user authentication)</li>
                  <li>Socket.io</li>
                  <li>Node and Express</li>
                  <li>API Consumption</li>
                  <li>jQuery</li>
                  <li>Materialize CSS</li>
                </ul>
                <p><strong>Description...</strong></p>
                  <p>Doppelgänger asks for basic information. Are you a humanities or STEM person? Politically, are you left-leaning or right-leaning? Based on your response, Doppelgänger will
                  curate resources for you (news, videos, and podcasts) that are from the opposite perspective. What's more, you can learn how to speak with those of different allegiances by using
                  Doppelgänger's real-time chat app.</p>
              </div>
            </div>
          </div>

          <div className="col s12 m12 l4">
            <div className="card small hoverable sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="assets/img/truckin.png" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4"><strong>Truckin' Good</strong><i className="material-icons right">keyboard_arrow_up</i></span>
              </div>
              <div className="card-action">
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="go to the app" href="https://still-sierra-11518.herokuapp.com/" target="_blank"><i className="material-icons">desktop_mac</i></a>
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="see the code on github" href="https://github.com/UNC-Otters/Food_Truck" target="_blank"><i className="material-icons">code</i></a>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"><strong>Truckin' Good</strong><i className="material-icons right">close</i></span>
                <p><strong>Technologies...</strong></p>
                <ul>
                  <li>MySQL and Sequelize</li>
                  <li>Multer-S3 and AWS S3 (file uploads and downloads)</li>
                  <li>Node and Express</li>
                  <li>API Consumption</li>
                  <li>jQuery</li>
                  <li>Bootstrap</li>
                </ul>
                <p><strong>Description...</strong></p>
                  <p>Truckin' Good enables you to find food trucks and rate them. We'll show you the average of each food truck's ratings along with their current tweets
                    so that you can see where they will be. Plus, you can download menus and write reviews. Do you have a food truck? You can enter your information into our
                    system (including uploading a menu), and we'll make your food truck available for users to find and rate.</p>
              </div>
            </div>
          </div>

          <div className="col s12 m12 l4">
            <div className="card small hoverable sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="assets/img/aardy.png" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4"><strong>Aardvark</strong><i className="material-icons right">keyboard_arrow_up</i></span>
              </div>
              <div className="card-action">
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="go to the app" href="https://bmanch.github.io/aardy-look/" target="_blank"><i className="material-icons">desktop_mac</i></a>
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="see the code on github" href="https://github.com/bmanch/aardy-look" target="_blank"><i className="material-icons">code</i></a>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"><strong>Aardvark</strong><i className="material-icons right">close</i></span>
                <p><strong>Technologies...</strong></p>
                <ul>
                  <li>Firebase</li>
                  <li>API Consumption</li>
                  <li>jQuery</li>
                  <li>Bootstrap</li>
                  <li>CSS3</li>
                </ul>
                <p><strong>Description...</strong></p>
                  <p>Aardvark is a college debt analysis tool. You give us some information about where you want to go to school, what you want to major in, and how much you think you will
                    contribute towards your education. Then, we'll let you know how much student loan debt you'll incur compared with your likely income level based on your choice of major. Plus,
                    we'll give you a forecast for what paying off your loans will look like in terms of monthly payments over a span of 5, 10, or 25 years.</p>
              </div>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col s12 m12 l4">
            <div className="card small hoverable sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="assets/img/newprof.png" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4"><strong>Portfolio</strong><i className="material-icons right">keyboard_arrow_up</i></span>
              </div>
              <div className="card-action">
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="go to the app" href="/" target="_blank"><i className="material-icons">desktop_mac</i></a>
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="see the code on github" href="https://github.com/Doppelganger-App/Doppelganger" target="_blank"><i className="material-icons">code</i></a>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"><strong>Portfolio</strong><i className="material-icons right">close</i></span>
                <p><strong>Technologies...</strong></p>
                <ul>
                  <li>React and React Router v4</li>
                  <li>MongoDB and Mongoose</li>
                  <li>Node and Express</li>
                  <li>ES6</li>
                  <li>Materialize CSS</li>
                </ul>
                <p><strong>Description...</strong></p>
                  <p>This is actually the SPA you are looking at right now. The entire site is built in React and routing is handled using React Router version 4. This app uses ES6 wherever possible!</p>
              </div>
            </div>
          </div>

          <div className="col s12 m12 l4">
            <div className="card small hoverable sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="assets/img/mern.png" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4"><strong>MERN News Search</strong><i className="material-icons right">keyboard_arrow_up</i></span>
              </div>
              <div className="card-action">
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="go to the app" href="https://intense-shelf-44096.herokuapp.com/"><i className="material-icons">desktop_mac</i></a>
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="see the code on github" href="https://github.com/bmanch/nytimes-search-react" target="_blank"><i className="material-icons">code</i></a>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"><strong>MERN News Search</strong><i className="material-icons right">close</i></span>
                <p><strong>Technologies...</strong></p>
                <ul>
                  <li>React and React Router pre-v4</li>
                  <li>MongoDB and Mongoose</li>
                  <li>Node and Express</li>
                  <li>API Consumption</li>
                  <li>Bootstrap</li>
                </ul>
                <p><strong>Description...</strong></p>
                  <p>This is a MERN SPA app that allows the you to search for articles and save articles.</p>
              </div>
            </div>
          </div>

          <div className="col s12 m12 l4">
            <div className="card small hoverable sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="assets/img/scraper.png" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4"><strong>News Groupie</strong><i className="material-icons right">keyboard_arrow_up</i></span>
              </div>
              <div className="card-action">
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="go to the app" href="https://murmuring-brushlands-79451.herokuapp.com/" target="_blank"><i className="material-icons">desktop_mac</i></a>
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="see the code on github" href="https://github.com/bmanch/news_app" target="_blank"><i className="material-icons">code</i></a>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"><strong>Aardvark</strong><i className="material-icons right">close</i></span>
                <p><strong>Technologies...</strong></p>
                <ul>
                  <li>MongoDB and Mongoose</li>
                  <li>Cheerio</li>
                  <li>Node and Express</li>
                  <li>Handlebars</li>
                  <li>jQuery</li>
                  <li>Materialize CSS</li>
                </ul>
                <p><strong>Description...</strong></p>
                  <p>This app scrapes the web for news headlines. It allows you to save articles as well as write comments/notes on those articles.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m12 l4">
            <div className="card small hoverable sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="assets/img/rps.png" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4"><strong>Rock, Paper, Scissors</strong><i className="material-icons right">keyboard_arrow_up</i></span>
              </div>
              <div className="card-action">
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="go to the app" href="https://bmanch.github.io/RPS-Multiplayer/" target="_blank"><i className="material-icons">desktop_mac</i></a>
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="see the code on github" href="https://github.com/bmanch/RPS-Multiplayer" target="_blank"><i className="material-icons">code</i></a>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"><strong>Rock, Paper, Scissors</strong><i className="material-icons right">close</i></span>
                <p><strong>Technologies...</strong></p>
                <ul>
                  <li>Firebase</li>
                  <li>jQuery</li>
                  <li>Bootstrap</li>
                </ul>
                <p><strong>Description...</strong></p>
                  <p>You can play against an opponent real-time and chat with that opponent too!</p>
              </div>
            </div>
          </div>

          <div className="col s12 m12 l4">
            <div className="card small hoverable sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="assets/img/comg.png" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4"><strong>Comic Gifs</strong><i className="material-icons right">keyboard_arrow_up</i></span>
              </div>
              <div className="card-action">
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="go to the app" href="https://bmanch.github.io/api-hw/" target="_blank"><i className="material-icons">desktop_mac</i></a>
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="see the code on github" href="https://github.com/bmanch/api-hw" target="_blank"><i className="material-icons">code</i></a>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"><strong>Comic Gifs</strong><i className="material-icons right">close</i></span>
                <p><strong>Technologies...</strong></p>
                <ul>
                  <li>API Consumption with AJAX</li>
                  <li>jQuery</li>
                  <li>CSS3</li>
                </ul>
                <p><strong>Description...</strong></p>
                  <p>Pick a comic or write in your own favorite comedian, and you get to see gifs featuring that comedian.</p>
              </div>
            </div>
          </div>

          <div className="col s12 m12 l4">
            <div className="card small hoverable sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="assets/img/triv.png" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4"><strong>U.S. Trivia</strong><i className="material-icons right">keyboard_arrow_up</i></span>
              </div>
              <div className="card-action">
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="go to the app" href="https://bmanch.github.io/TriviaGame/" target="_blank"><i className="material-icons">desktop_mac</i></a>
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="see the code on github" href="https://github.com/bmanch/TriviaGame" target="_blank"><i className="material-icons">code</i></a>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"><strong>U.S. Trivia</strong><i className="material-icons right">close</i></span>
                <p><strong>Technologies...</strong></p>
                <ul>
                  <li>jQuery</li>
                  <li>Bootstrap</li>
                </ul>
                <p><strong>Description...</strong></p>
                  <p>Try out your skills with this U.S. trivia game.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m12 l4">
            <div className="card small hoverable sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="assets/img/crys.png" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4"><strong>Crystals Collector</strong><i className="material-icons right">keyboard_arrow_up</i></span>
              </div>
              <div className="card-action">
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="go to the app" href="https://bmanch.github.io/week-4-game/" target="_blank"><i className="material-icons">desktop_mac</i></a>
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="see the code on github" href="https://github.com/bmanch/week-4-game" target="_blank"><i className="material-icons">code</i></a>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"><strong>Crystals Collector</strong><i className="material-icons right">close</i></span>
                <p><strong>Technologies...</strong></p>
                <ul>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>Bootstrap</li>
                </ul>
                <p><strong>Description...</strong></p>
                  <p>Try out your math skills on this game.</p>
              </div>
            </div>
          </div>

          <div className="col s12 m12 l4">
            <div className="card small hoverable sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="assets/img/hman.png" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4"><strong>(Bad) Hollywood Hangman</strong><i className="material-icons right">keyboard_arrow_up</i></span>
              </div>
              <div className="card-action">
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="go to the app" href="https://bmanch.github.io/Hangman-Game/" target="_blank"><i className="material-icons">desktop_mac</i></a>
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="see the code on github" href="https://github.com/bmanch/Hangman-Game" target="_blank"><i className="material-icons">code</i></a>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"><strong>(Bad) Hollywood Hangman</strong><i className="material-icons right">close</i></span>
                <p><strong>Technologies...</strong></p>
                <ul>
                  <li>Vanilla JavaScript</li>
                  <li>Bootstrap</li>
                </ul>
                <p><strong>Description...</strong></p>
                  <p>Play a game of Hangman. This code definitely needs some refactoring, but it was a good early challenge in the boot camp.</p>
              </div>
            </div>
          </div>

          <div className="col s12 m12 l4">
            <div className="card small hoverable sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="assets/img/ogport.png" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4"><strong>Original Portfolios</strong><i className="material-icons right">keyboard_arrow_up</i></span>
              </div>
              <div className="card-action">
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="go to the bootstrap app" href="https://bmanch.github.io/Bootstrap-Portfolio/" target="_blank"><i className="material-icons">desktop_mac</i></a>
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="see the code on github" href="https://github.com/bmanch/Bootstrap-Portfolio" target="_blank"><i className="material-icons">code</i></a>
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="go to the pure css app" href="https://bmanch.github.io/Responsive-Portfolio/" target="_blank"><i className="material-icons">desktop_mac</i></a>
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="see the code on github" href="https://github.com/bmanch/Responsive-Portfolio" target="_blank"><i className="material-icons">code</i></a>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"><strong>Original Portfolios</strong><i className="material-icons right">close</i></span>
                <p><strong>Technologies...</strong></p>
                <ul>
                  <li>Bootstrap</li>
                  <li>Pure CSS</li>
                </ul>
                <p><strong>Description...</strong></p>
                  <p>I included these to show some of my design and CSS skills.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Portfolio;