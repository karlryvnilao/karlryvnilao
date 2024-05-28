import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Sticky = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        changeCSSFile(); // Call function to change CSS file
    };

    const changeCSSFile = () => {
        const link = document.getElementById('theme-css');
        if (isClicked) {
            link.href = '/src/styles/App.css'; // Path to your sun styles
        } else {
            link.href = '/src/styles/darkapp.css'; // Path to your moon styles
        }
    };

    const icon = isClicked ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />;

    return (
        <div className="sticky-logo" onClick={handleClick}>
            {icon}
        </div>
    );
};

export default Sticky;
