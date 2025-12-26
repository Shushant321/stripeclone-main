import React from 'react';

const BackgroundElements = () => {
  return (
    <div className="background-elements">
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>
      <div className="bg-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i % 5}`}></div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundElements;