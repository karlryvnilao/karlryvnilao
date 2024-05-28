import React, { useEffect, useRef, useState } from 'react';

function Portfolio() {
  const [elements, setElements] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const updatedElements = elements.map((element, index) => {
        const shouldBeVisible = containerTop + element.top < window.innerHeight * 0.75;
        return { ...element, isVisible: shouldBeVisible };
      });
      setElements(updatedElements);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [elements]);

  useEffect(() => {
    if (containerRef.current) {
      const blocks = Array.from(containerRef.current.children).map(block => ({
        top: block.offsetTop,
        isVisible: false
      }));
      setElements(blocks);
    }
  }, []);

  return (
    <div className='portfolio' ref={containerRef}>
      {elements.map((element, index) => (
        <div key={index} className={`cd-timeline-block ${element.isVisible ? 'bounce-in' : 'is-hidden'}`}>
          {/* Your timeline block content */}
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
