import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import ConnectionLine from './ConnectionLine';

const ProblemSolutionSection = () => {
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
    <section className="problem-solution-section">
      <div className="problem-solution-container">
        {/* Left Side - Problem Statement */}
        <div className="problem-side">
          <div className="problem-content">
            {/* <h2 className="problem-main-title">
              The Problem
            </h2> */}
            <div className="problem-statement">
              <h1 className="problem-heading">
                Payments are expensive, slow, and opaque
              </h1>
              <h3 className="problem-description">
                Overseas clients follow their own payment cycles, tracking becomes difficult. 
                Banks add hidden FX margins, settlements are slow, and businesses lack visibility 
                over their global cash flows.
              </h3>
            </div>
            
            {/* <div className="problem-visual">
              <div className="problem-icon-grid">
                <div className="problem-icon-item">
                  <div className="problem-icon">💸</div>
                  <span>Expensive</span>
                </div>
                <div className="problem-icon-item">
                  <div className="problem-icon">🐌</div>
                  <span>Slow</span>
                </div>
                <div className="problem-icon-item">
                  <div className="problem-icon">🔍</div>
                  <span>Opaque</span>
                </div>
                <div className="problem-icon-item">
                  <div className="problem-icon">📊</div>
                  <span>Poor Visibility</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Right Side - Modular Solutions Animation */}
        <div className="solution-side">
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

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;