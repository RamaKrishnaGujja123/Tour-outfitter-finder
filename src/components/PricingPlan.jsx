import React from 'react';

const PricingPlan = ({ plan, onSelect }) => (
  <div className="pricing-plan" onClick={() => onSelect(plan)}>
    <h3>{plan.name}</h3>
    <p>{plan.description}</p>
    <p>${plan.price}</p>
  </div>
);

export default PricingPlan;