import React, {Component} from 'react'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row" id="marquis">
          <div className="col s4 offset-s4 m4 offset-m4 l3 offset-l1 center-align">
            <img className="circle responsive-img" id="profpic" src="assets/img/profile_pic.jpg" />
            <blockquote>
              Graduate of The Coding Boot Camp at UNC, Chapel Hill
            </blockquote>
          </div>
          <div className="col s12 m12 l6 offset-l1 center-align">
            <h3>Brian Manchester</h3>
            <h4>Full Stack Developer</h4>
            <h4>Co-Founder of List Turtle™</h4>
            <h5><a href="https://www.listturtle.com" target="_blank">www.listturlte.com</a></h5>
            <br />
            <div className="row" id="prof">
              <h5>proficiencies</h5>
              <br />
              <div className="col s10 offset-s1">
                <div className="chip">
                  Typescript
                </div>
                <div className="chip">
                  Javascript (es6+)
                </div>
                <div className="chip">
                  Node.js
                </div>
                <div className="chip">
                  Express
                </div>
                <div className="chip">
                  PostgresSQL
                </div>
                <div className="chip">
                  MySQL
                </div>
                <div className="chip">
                  REST APIs
                </div>
                <div className="chip">
                  GraphQL
                </div>
                <div className="chip">
                  React
                </div>
                <div className="chip">
                  Redux
                </div>
                <div className="chip">
                  Next.js
                </div>
                <div className="chip">
                  Material-UI
                </div>
                <div className="chip">
                  MongoDB
                </div>
                <div className="chip">
                  Angular
                </div>
                <div className="chip">
                  Socket.io
                </div>
                <div className="chip">
                  REST APIs
                </div>
                <div className="chip">
                  jQuery
                </div>
                <div className="chip">
                  Materialize CSS
                </div>
                <div className="chip">
                  Bootstrap
                </div>
                <div className="chip">
                  CSS3
                </div>
                <div className="chip">
                  HTML5
                </div>
              </div>
              <div className="col s6 offset-s3 left-align">
                <blockquote>
                  And more... Take a look at my apps for more details.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="row">
          <div className="col s12 center-align">
            <h3>Featured Apps</h3>
          </div>
          <div className="col s10 offset-s1 m8 offset-m2 l6">
            <div className="card medium hoverable sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="assets/img/dopple.png" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4"><strong>Doppelgänger</strong><i className="material-icons right">keyboard_arrow_up</i></span>
                <p>Expand your universe.</p>
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
          <div className="col s10 offset-s1 m8 offset-m2 l6">
            <div className="card medium hoverable sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="assets/img/mern.png" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4"><strong>MERN News Search</strong><i className="material-icons right">keyboard_arrow_up</i></span>
                <p>Search for and save news articles.</p>
              </div>
              <div className="card-action">
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="go to the app" href="https://intense-shelf-44096.herokuapp.com/" target="_blank"><i className="material-icons">desktop_mac</i></a>
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="see the code on github" href="https://github.com/bmanch/nytimes-search-react" target="_blank"><i className="material-icons">code</i></a>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"><strong>MERN News Search</strong><i className="material-icons right">close</i></span>
                <p><strong>Technologies...</strong></p>
                <ul>
                  <li>React and React Router pre-v4</li>
                  <li>ES6</li>
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
          <div className="col s10 offset-s1 m8 offset-m2 l6">
            <div className="card medium hoverable sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="assets/img/truckin.png" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4"><strong>Truckin' Good</strong><i className="material-icons right">keyboard_arrow_up</i></span>
                <p>Find and rate foodtrucks.</p>
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
          <div className="col s10 offset-s1 m8 offset-m2 l6">
            <div className="card medium hoverable sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="assets/img/aardy.png" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4"><strong>Aardvark</strong><i className="material-icons right">keyboard_arrow_up</i></span>
                <p>Going to college? Let's talk expenses.</p>
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
          <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
            <div className="card medium hoverable sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="assets/img/newprof.png" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4"><strong>Portfolio</strong><i className="material-icons right">keyboard_arrow_up</i></span>
                <p>My personal website.</p>
              </div>
              <div className="card-action">
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="go to the app" href="/" target="_blank"><i className="material-icons">desktop_mac</i></a>
                <a className="tooltipped" data-position="right" data-delay="50" data-tooltip="see the code on github" href="https://github.com/bmanch/react-portfolio" target="_blank"><i className="material-icons">code</i></a>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4"><strong>Portfolio</strong><i className="material-icons right">close</i></span>
                <p><strong>Technologies...</strong></p>
                <ul>
                  <li>React and React Router v4</li>
                  <li>Node and Express</li>
                  <li>ES6</li>
                  <li>Materialize CSS</li>
                </ul>
                <p><strong>Description...</strong></p>
                  <p>This is actually the SPA you are looking at right now. The entire site is built in React and routing is handled using React Router version 4. This app uses ES6 wherever possible!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;