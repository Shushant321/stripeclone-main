import React from 'react';

const PlatformLayers = () => {
  const layers = [
    { name: 'Billing & Invoicing', icon: '📄', color: 'from-blue-500 to-blue-600' },
    { name: 'Compliance & AML Controls', icon: '🛡️', color: 'from-green-500 to-green-600' },
    { name: 'Payment Gateway & Checkout', icon: '💳', color: 'from-purple-500 to-purple-600' },
    { name: 'Global Collections & Settlement', icon: '🌍', color: 'from-orange-500 to-orange-600' },
    { name: 'Treasury & Working Capital', icon: '💰', color: 'from-red-500 to-red-600' },
    { name: 'Reporting & Reconciliation', icon: '📊', color: 'from-indigo-500 to-indigo-600' }
  ];

  return (
    <section className="platform-layers">
      <div className="layers-header">
        <h2 className="layers-title">Platform Layers</h2>
        <p className="layers-subtitle">
          Each layer works independently. Together, they eliminate cross-border friction.
        </p>
      </div>

      <div className="layers-stack">
        {layers.map((layer, index) => (
          <div 
            key={index} 
            className={`layer-card bg-gradient-to-r ${layer.color}`}
            style={{ 
              transform: `translateY(${index * -10}px) translateZ(${index * 20}px)`,
              zIndex: layers.length - index 
            }}
          >
            <div className="layer-icon">{layer.icon}</div>
            <div className="layer-name">{layer.name}</div>
            <div className="layer-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatformLayers;