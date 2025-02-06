import React from 'react';

const CurrencySelector = ({ currencies, currentCurrency, onCurrencyChange }) => {
  return (
    <select value={currentCurrency} onChange={(e) => onCurrencyChange(e.target.value)}>
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelector;