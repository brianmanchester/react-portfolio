import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m12 l8 offset-l2 center-align">
          <h4>Get in touch</h4>
          <div className="divider"></div>
          <br />
          <div className="col s10 offset-s1 m3 offset-m2 l4 offset-l1">
            <h6 className="valign-wrapper"><i className="material-icons left">email</i>brian.l.manchester@gmail.com</h6>
            <h6 className="valign-wrapper"><img src="assets/img/twitter_icon.png" className="bird" />@bmanch7</h6>
          </div>
          <div className="col s10 offset-s1 m3 offset-m3 l4 offset-l3">
            <h6><a className="valign-wrapper" href="https://www.linkedin.com/in/brian-l-manchester/" target="_blank"><img src="assets/img/linkedin_icon.png" className="bird" />LinkedIn</a></h6>
            <h6><a className="valign-wrapper" href="https://github.com/bmanch" target="_blank"><img src="assets/img/github_icon.png" className="bird" />Github</a></h6>
            <h6><a className="valign-wrapper" href="assets/files/Brian_Manchester_Resume.pdf" target="_blank"><i className="material-icons left">assignment</i>CV</a></h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// <div className="col s12 m10 offset-m1 l8 offset-l2">
//             <ul>
//               <li><i className="material-icons left">email</i>brian.l.manchester@gmail.com</li>
//               <li><img src="assets/img/twitter_icon.png" className="bird left" />@bmanch7</li>
//             </ul>
//           </div>