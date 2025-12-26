import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import ConnectionLine from './ConnectionLine';

const ModularSolutions = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [connections, setConnections] = useState([]);
  
  const services = [
    { name: 'Tax', icon: '📊', gradient: 'gradient-purple', pos: { x: 0, y: 0 } },
    { name: 'Atlas', icon: '🌍', gradient: 'gradient-blue', pos: { x: 88, y: 0 } },
    { name: 'Billing', icon: '📄', gradient: 'gradient-green', pos: { x: 176, y: 0 } },
    { name: 'Invoicing', icon: '🧾', gradient: 'gradient-green-dark', pos: { x: 264, y: 0 } },
    
    { name: 'Capital', icon: '💰', gradient: 'gradient-orange', pos: { x: 44, y: 88 } },
    { name: 'Payments', icon: '💳', gradient: 'gradient-indigo', pos: { x: 132, y: 88 } },
    { name: 'Gateways', icon: '🚪', gradient: 'gradient-teal', pos: { x: 220, y: 88 } },
    
    { name: 'Climate', icon: '🌱', gradient: 'gradient-green', pos: { x: 0, y: 176 } },
    { name: 'Treasury', icon: '🏦', gradient: 'gradient-gray', pos: { x: 88, y: 176 } },
    { name: 'Connect', icon: '🔗', gradient: 'gradient-pink', pos: { x: 176, y: 176 } },
    { name: 'Terminal', icon: '💻', gradient: 'gradient-slate', pos: { x: 264, y: 176 } },
    
    { name: 'Radar', icon: '📡', gradient: 'gradient-red', pos: { x: 44, y: 264 } },
    { name: 'Checkout', icon: '✅', gradient: 'gradient-emerald', pos: { x: 132, y: 264 } },
    { name: 'Issuing', icon: '🎫', gradient: 'gradient-violet', pos: { x: 220, y: 264 } },
    
    { name: 'Identity', icon: '🆔', gradient: 'gradient-cyan', pos: { x: 0, y: 352 } },
    { name: 'Sigma', icon: 'Σ', gradient: 'gradient-orange-alt', pos: { x: 88, y: 352 } },
    { name: 'Elements', icon: '⚡', gradient: 'gradient-amber', pos: { x: 176, y: 352 } }
  ];
  
  const handleCardHover = (cardName, position, isHovered) => {
    if (isHovered) {
      setHoveredCard(cardName);
      const newConnections = services
        .filter(service => service.name !== cardName)
        .map(service => ({
          from: { x: position.x + 40, y: position.y + 40 },
          to: { x: service.pos.x + 40, y: service.pos.y + 40 },
          active: true
        }));
      setConnections(newConnections);
    } else {
      setHoveredCard(null);
      setConnections([]);
    }
  };
  
  return (
    <section className="modular-solutions">
      <div className="solutions-header">
        <div className="solutions-tagline">Modular solutions</div>
        <h2 className="solutions-title">
          A fully integrated suite of financial and payments products
        </h2>
        <p className="solutions-description">
          Choose the products you need. Use them independently or together. 
          Scale your operations with our comprehensive fintech infrastructure.
        </p>
      </div>

      <div className="network-container">
        <div className="network-grid">
          {connections.map((connection, index) => (
            <ConnectionLine
              key={index}
              from={connection.from}
              to={connection.to}
              active={connection.active}
            />
          ))}
          
          {services.map((service, index) => (
            <div
              key={service.name}
              className="service-position"
              style={{
                left: `${service.pos.x}px`,
                top: `${service.pos.y}px`
              }}
            >
              <ServiceCard
                {...service}
                position={service.pos}
                delay={index * 100}
                onHover={handleCardHover}
              />
            </div>
          ))}
          
          {hoveredCard && (
            <div className="network-status">
              🌐 Network Active: {hoveredCard}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ModularSolutions;