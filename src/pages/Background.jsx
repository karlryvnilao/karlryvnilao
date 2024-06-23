import React from 'react';

const Background = () => {
  return (
    <div className="background-container">
    <div className="container-fluid">
      <div className="background">
         <div className="cube"></div>
         <div className="cube"></div>
         <div className="cube"></div>
         <div className="cube"></div>
        <div className="cube"></div>
      </div>
     <header>
       <nav>
          <ul>
             <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
           </ul>
         </nav>
        <div className="logo"><span>N</span></div>
        <section className="header-content">
           <h1>Welcome</h1>
          <p> Welcome to our studio. We are a passionated group of people,
             making high quality products designed to make your life easier.</p>
          <button>Know more</button>
          <button>Meet us</button>
        </section>
        </header>
    </div>
    </div>
  );
};

export default Background;
