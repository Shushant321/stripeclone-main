import React from 'react';

const ConnectionLine = ({ from, to, active }) => {
  const calculateLine = () => {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    
    return {
      length,
      angle,
      left: from.x,
      top: from.y
    };
  };
  
  const line = calculateLine();
  
  return (
    <div
      className={`connection-line ${active ? 'active' : ''}`}
      style={{
        width: `${line.length}px`,
        left: `${line.left}px`,
        top: `${line.top}px`,
        transform: `rotate(${line.angle}deg)`,
        transformOrigin: '0 50%'
      }}
    >
      <div className="data-particle particle-1"></div>
      <div className="data-particle particle-2"></div>
      <div className="data-particle particle-3"></div>
    </div>
  );
};

export default ConnectionLine;