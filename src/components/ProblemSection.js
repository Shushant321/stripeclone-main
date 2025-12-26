import React from 'react';

const ProblemSection = () => {
  const problems = [
    {
      icon: '📝',
      title: 'Manual Invoicing',
      description: 'Invoicing is manual and inconsistent across countries',
      visual: 'problem-manual'
    },
    {
      icon: '🔀',
      title: 'Fragmented Compliance',
      description: 'Tax compliance varies across countries and transaction types',
      visual: 'problem-fragmented'
    },
    {
      icon: '💸',
      title: 'Expensive & Slow Collections',
      description: 'Banks add hidden FX margins, settlements are slow',
      visual: 'problem-expensive'
    },
    {
      icon: '📊',
      title: 'Poor Cash-Flow Visibility',
      description: 'Businesses lack visibility over their global cash flows',
      visual: 'problem-visibility'
    }
  ];

  return (
    <section className="problem-section">
      <div className="problem-header">
        <h2 className="problem-title">
          Cross-Border Payments Operations Are More Than Just Transactions
        </h2>
        <p className="problem-subtitle">
          International payments business operations are unpredictable.
        </p>
      </div>

      <div className="problems-grid">
        {problems.map((problem, index) => (
          <div key={index} className={`problem-card ${problem.visual}`}>
            <div className="problem-icon">{problem.icon}</div>
            <h3 className="problem-card-title">{problem.title}</h3>
            <p className="problem-card-description">{problem.description}</p>
            <div className="problem-visual-effect"></div>
          </div>
        ))}
      </div>

      <div className="problem-details">
        <div className="problem-detail-card">
          <div className="detail-number">1</div>
          <div className="detail-content">
            <h4>Payments are expensive, slow, and opaque</h4>
            <p>Overseas clients follow their own payment cycles, tracking becomes difficult. Banks add hidden FX margins, settlements are slow, and businesses lack visibility over their global cash flows.</p>
          </div>
        </div>

        <div className="problem-detail-card">
          <div className="detail-number">2</div>
          <div className="detail-content">
            <h4>Reconciliation across banks, gateways, and ERPs is fragmented</h4>
            <p>Overseas clients follow their own payment cycles, tracking becomes difficult. Invoicing is manual and inconsistent across countries.</p>
          </div>
        </div>

        <div className="problem-detail-card">
          <div className="detail-number">3</div>
          <div className="detail-content">
            <h4>Compliance requirements change by geography and transaction type</h4>
            <p>Tax compliance varies across countries, creating complexity for finance teams managing global operations.</p>
          </div>
        </div>
      </div>

      <div className="problem-conclusion">
        <div className="conclusion-content">
          <h3>The Result</h3>
          <p>Poor cash-flow visibility, delayed settlements, higher working capital needs, and finance teams spending time stitching systems together instead of running the business.</p>
        </div>
        <div className="conclusion-visual">
          <div className="chaos-animation">
            <div className="chaos-element chaos-1"></div>
            <div className="chaos-element chaos-2"></div>
            <div className="chaos-element chaos-3"></div>
            <div className="chaos-element chaos-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;