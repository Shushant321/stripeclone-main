import React from 'react';

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h2 className="pricing-title">
          Transparent Pricing. No Hidden FX Margins.
        </h2>
        <p className="pricing-subtitle">
          Trusty Money charges transaction-based fees only for payment processing. Other modules are priced independently.
        </p>
      </div>

      <div className="pricing-content">
        <div className="pricing-card">
          <div className="pricing-features">
            <div className="pricing-feature">
              <div className="feature-icon">💳</div>
              <div className="feature-text">Platform Payments fee starting from <strong>0.49%</strong> per transaction</div>
            </div>
            <div className="pricing-feature">
              <div className="feature-icon">🚫</div>
              <div className="feature-text"><strong>Zero FX markup</strong></div>
            </div>
            <div className="pricing-feature">
              <div className="feature-icon">📈</div>
              <div className="feature-text">Real-time mid-market exchange rate (same as market rate)</div>
            </div>
            <div className="pricing-feature">
              <div className="feature-icon">📋</div>
              <div className="feature-text">All fees disclosed upfront</div>
            </div>
          </div>
        </div>

        <div className="pricing-example">
          <h3 className="example-title">Example:</h3>
          <div className="example-content">
            <div className="rate-display">
              <div className="rate-label">USD to INR Rate Today</div>
              <div className="rate-value">₹90.91</div>
              <div className="rate-guarantee">That's exactly what you get.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;