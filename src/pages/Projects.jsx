import React, { useState } from 'react';

function ExpandingGrid() {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (cardIndex) => {
    setExpandedCard(cardIndex === expandedCard ? null : cardIndex);
  };

  const cards = [
    {
      title: 'Card 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit libero, non aliquam tortor.'
    },
    {
      title: 'Card 2',
      content: 'Suspendisse potenti. Fusce vel neque a ex luctus interdum. Nulla facilisi. Fusce lobortis lorem in fermentum aliquet.'
    }
  ];

  return (
    <div className="expanding-grid-container">
      {cards.map((card, index) => (
        <div key={index} className={`grid-card ${expandedCard === index ? 'expanded' : ''}`} onClick={() => handleCardClick(index)}>
          <div className="card-header">{card.title}</div>
          <div className="card-content">{card.content}</div>
        </div>
      ))}
    </div>
  );
}

export default ExpandingGrid;