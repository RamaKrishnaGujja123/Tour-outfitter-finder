import React from 'react';

const PaymentOption = ({ method, onSelect }) => (
  <div className="payment-option" onClick={() => onSelect(method)}>
    <input type="radio" name="paymentMethod" value={method} />
    <label>{method}</label>
  </div>
);

export default PaymentOption;