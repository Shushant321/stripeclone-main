import React from 'react';

const ComparisonSection = () => {
  const features = [
    { name: 'FX Transparency', banks: false, gateways: false, trusty: true },
    { name: 'Virtual Intl Accounts', banks: false, gateways: false, trusty: true },
    { name: 'Billing + Compliance', banks: false, gateways: false, trusty: true },
    { name: 'Faster Settlement', banks: false, gateways: false, trusty: true },
    { name: 'Crypto / Stablecoin', banks: false, gateways: false, trusty: true }
  ];

  const CheckIcon = () => (
    <div className="check-icon">✓</div>
  );

  const CrossIcon = () => (
    <div className="cross-icon">✗</div>
  );

  return (
    <section className="comparison-section">
      <div className="comparison-header">
        <h2 className="comparison-title">Why Businesses Choose Trusty Money</h2>
      </div>

      <div className="comparison-table">
        <div className="table-header">
          <div className="header-cell feature-header">Feature</div>
          <div className="header-cell">Banks</div>
          <div className="header-cell">Gateways</div>
          <div className="header-cell trusty-header">TrustyMoney</div>
        </div>

        {features.map((feature, index) => (
          <div key={index} className="table-row">
            <div className="table-cell feature-name">{feature.name}</div>
            <div className="table-cell">
              {feature.banks ? <CheckIcon /> : <CrossIcon />}
            </div>
            <div className="table-cell">
              {feature.gateways ? <CheckIcon /> : <CrossIcon />}
            </div>
            <div className="table-cell trusty-cell">
              {feature.trusty ? <CheckIcon /> : <CrossIcon />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComparisonSection;