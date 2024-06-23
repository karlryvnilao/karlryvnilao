import React from 'react';


function About() {
  const handleDownload = () => {
    const cvUrl = 'src/file/KARL_ILAO_RESUME.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.target = '_blank';
    link.download = 'Karl_Ilao_Resume.pdf';
    link.click();
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="profile-image">
          <img
          src="/images/karl.png"
            alt="Karl Ilao Profile"
            className="profile-image"
          />
        </div>
        <div className="text-content">
        <div className="textanime">
          <h1 className="name">"Karl Reyven Ilao"</h1>
          </div>
          <span className="description">I&apos;m not a programmer; I just type fast.</span>
          <p className="bio">Eager to gain NEW knowledge like code that never stops compiling.</p>
          <button onClick={handleDownload} className="download-button">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;