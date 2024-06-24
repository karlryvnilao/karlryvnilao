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
          <h2>Trainings and Seminars</h2>
          <p>I actively participate in a variety of trainings and seminars to continuously
            enhance my skills and stay updated with industry trends.</p>
    
    </div>
  );
}

export default Training;