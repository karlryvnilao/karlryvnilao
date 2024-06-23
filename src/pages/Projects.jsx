import React, { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    const contexts = document.querySelectorAll('.context');
    contexts.forEach((context, index) => {
      if (index % 2 === 0) {
        context.classList.add('image-right');
      } else {
        context.classList.add('image-left');
      }
    });
  }, []);

  return (
    <div className="projects">
      <h2>Projects</h2>
      <p>Projects is the best practices to enhace your skills and to broad knowledge.</p>
      <div className="context" id="context1">
        <a href="https://tesdawebsiteforcss.000webhostapp.com/"><img src="src/images/Projects/Tesda.png" alt="Image 1" className="context-image"/></a>
        <div className="context-text">
          <h3>Tesda Management</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>

      <div className="context" id="context2">
        <div className="context-text">
          <h3>Mental Health Management</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <a href="https://canossasstudentmentalhealthsupportsystem.000webhostapp.com/"><img src="src/images/Projects/Mental.png" alt="Image 2" className="context-image"/></a>
      </div>

      <div className="context" id="context3">
        <a href="https://reservationforub.000webhostapp.com/"><img src="src/images/Projects/Reservation.png" alt="Image 3" className="context-image"/></a>
        <div className="context-text">
          <h3>Reservation System</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div> 
      </div>
      
      {/* Add more contexts as needed */}
    </div>
  );
}

export default Projects;
