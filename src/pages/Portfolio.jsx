import $ from 'jquery'; // Import jQuery
import React, { useEffect } from 'react';

function Portfolio() {
  useEffect(() => {
    $(document).ready(function(){
      var $timeline_block = $('.cd-timeline-block');

      // Hide timeline blocks which are outside the viewport
      $timeline_block.each(function(){
        if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
          $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
      });

      // On scrolling, show/animate timeline blocks when they enter the viewport
      $(window).on('scroll', function(){
        $timeline_block.each(function(){
          if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
          }
        });
      });
    });
  }, []);

  return (
    <div className='Portfolio'>
    <div className='portfolio'>
      <section id="cd-timeline" className="cd-container">
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-picture">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Section 1 visual representation" />
          </div>

          <div className="cd-timeline-content">
            <h2>Work Immersion Program</h2>
            <p>CREOTEC</p>
            <span className="cd-date">Jan 14 2019</span>
          </div>
        </div>

        {/* Example for another block */}
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-movie">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg" alt="Section 2 visual representation" />
          </div>

          <div className="cd-timeline-content">
            <h2>17th YOUTH CONGRESS IN INFORMATION TECHNOLOGY (Y4IT)</h2>
            <p>UP Diliman</p>
            
            <span className="cd-date">September 26, 2019</span>
          </div>
        </div>


        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-movie">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Location" />
          </div>
          
			<div className="cd-timeline-content">
				<h2>CCNAv7: Introduction to Networks</h2>
				<p>Online</p>
				
				<span className="cd-date">June 23, 2021</span>
			</div> 
		</div>

		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Location" />
			</div>

			<div className="cd-timeline-content">
				<h2>19th YOUTH CONGRESS IN INFORMATION TECHNOLOGY (Y4IT)</h2>
				<p>Online Platform through Zoom.</p>
				
				<span className="cd-date">Feb 14</span>
			</div>
		</div>

		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-movie">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Location" />
			</div>

			<div className="cd-timeline-content">
				<h2>JCBA Solution and Consultancy Inc.</h2>
				<p>Web Development Training</p>
				
				<span className="cd-date">April 2023</span>
			</div>
		</div>

		<div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg" alt="Movie" />
			</div>

			<div className="cd-timeline-content">
				<h2>Web Developer Training</h2>
				<p>Batangas State University, The National Engineering University-Lipa Campus.</p>
				<span className="cd-date">October 12-16, 2023</span>
			</div>
		</div>

    <div className="cd-timeline-block">
			<div className="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg" alt="Movie" />
			</div>

			<div className="cd-timeline-content">
				<h2>GDG DEVFEST MANILA 2023</h2>
				<p>The Podium Hall - 12 ADB Ave., Ortigas Center, Mandaluyong City, Metro Manila, 1550</p>
				<span className="cd-date">November 11, 2023</span>
			</div>
		</div>
	</section>
    
    </div>
    </div>
  );
}

export default Portfolio;