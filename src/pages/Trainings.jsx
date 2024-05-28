import $ from 'jquery'; // Import jQuery
import React, { useEffect } from 'react';

function Training() {
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
    <div className='Trainings'>
    <header className='portfolio-header'>
          <h1>Trainings and Seminars</h1>
          <span className=''>I actively participate in a variety of trainings and seminars to continuously
            enhance my skills and stay updated with industry trends. These learning experiences
            have been invaluable in my professional growth and have equipped me with the knowledge
            and expertise to excel in my field.</span>
      </header>
    
    </div>
  );
}

export default Training;