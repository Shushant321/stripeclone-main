import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'AI-Powered Billing & Invoicing',
      subtitle: 'Smart billing designed for international businesses',
      features: [
        'Automated invoice generation',
        'Country-specific tax calculation',
        'Compliance-ready invoice formats',
        'Usage-based and milestone billing',
        'AI-assisted billing intelligence'
      ],
      icon: '🤖',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '2',
      title: 'Built-in Global Tax & Compliance Automation',
      subtitle: 'Global compliance handled automatically',
      features: [
        'Buyer-country tax logic applied',
        'Sales tax / VAT / GST included',
        'Compliance-ready documentation',
        'AML & regulatory sanctions screening'
      ],
      icon: '🛡️',
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '3',
      title: 'Virtual International Payment Accounts',
      subtitle: 'Local accounts for global collections',
      features: [
        'Virtual bank accounts in major currencies',
        'Local payment methods for overseas buyers',
        'Transparent FX with zero markups',
        'Hosted checkout pages & APIs',
        'Multi-rail payment gateway'
      ],
      icon: '🏦',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '4',
      title: 'Faster INR Settlement',
      subtitle: 'Instant settlement without conversion stress',
      features: [
        'Funds collected internationally',
        'Instant settlement to Indian bank accounts',
        'Currency conversion handled by TrustyMoney',
        'Convert anytime — no delays, no pressure'
      ],
      icon: '⚡',
      color: 'from-orange-500 to-red-500'
    },
    {
      number: '5',
      title: 'Treasury & Working Capital Management',
      subtitle: 'Operational treasury designed to free trapped working capital',
      features: [
        'Visibility into incoming international funds',
        'Control over conversion timing & settlement',
        'Faster liquidity and reduced DSO',
        'Centralized cash-flow management'
      ],
      icon: '💰',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="works-header">
        <h2 className="works-title">How It Works</h2>
        <p className="works-subtitle">Core Flow</p>
      </div>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-visual">
              <div className={`step-number bg-gradient-to-r ${step.color}`}>
                {step.number}
              </div>
              <div className="step-icon">{step.icon}</div>
            </div>
            
            <div className="step-content">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-subtitle">{step.subtitle}</p>
              <ul className="step-features">
                {step.features.map((feature, idx) => (
                  <li key={idx} className="step-feature">
                    <span className="feature-bullet">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {index < steps.length - 1 && (
              <div className="step-connector">
                <div className="connector-line"></div>
                <div className="connector-arrow">↓</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;