import React from 'react';

function Footer() {
  return (
    <footer className="footer">
    <div className="logo">
    </div>
    <div className="social-logos">
      {/* Add your social media logos here */}
      <a href="https://web.facebook.com/karlryvnilao/"><i className="fab fa-facebook"></i></a>
      <a href="https://www.instagram.com/karlryvnilaox/"><i className="fab fa-instagram"></i></a>
      <a href="mailto:karl.ilao18@gmail.com"><i className="fa fa-envelope"></i></a>
      <a href="https://github.com/karlryvniao"><i className="fab fa-github"></i></a>
      {/* Add more social media logos as needed */}
    </div>
    <p className="footer-text">© 2023. All rights reserved.</p>
  </footer>
);
}

export default Footer;
