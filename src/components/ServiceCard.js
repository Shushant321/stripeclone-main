import React, { useState } from 'react';

const ServiceCard = ({ name, icon, gradient, delay = 0, position, onHover }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover && onHover(name, position, true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover && onHover(name, position, false);
  };
  
  return (
    <div className="service-card-wrapper">
      <div 
        className={`service-card ${gradient} ${isHovered ? 'hovered' : ''}`}
        style={{ animationDelay: `${delay}ms` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-shimmer"></div>
        <div className="card-icon">{icon}</div>
        <div className="card-name">{name}</div>
        <div className="card-glow"></div>
      </div>
      
      <div className="card-tooltip">
        {name}
        <div className="tooltip-arrow"></div>
      </div>
    </div>
  );
};

export default ServiceCard;