import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BookingPage.css';

const BookingPage = () => {
  const [tourName, setTourName] = useState('');
  const [participants, setParticipants] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [datePreference, setDatePreference] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const paymentMethods = ['Credit Card', 'Debit Card', 'PayPal'];
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Submitted:', { tourName, participants, contactInfo, datePreference, selectedPaymentMethod });
    alert('Booking Submitted');
    // Simulate booking process
    // Reset form
    setTourName('');
    setParticipants('');
    setContactInfo('');
    setDatePreference('');
    setSelectedPaymentMethod('');
  };

  const handlePaymentSelect = (method) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <div className="booking-page">
      <h1>Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tourName">Tour Name</label>
          <input
            type="text"
            id="tourName"
            value={tourName}
            onChange={(e) => setTourName(e.target.value)}
            aria-label="Tour Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="participants">Number of Participants</label>
          <input
            type="number"
            id="participants"
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
            aria-label="Number of Participants"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactInfo">Contact Information</label>
          <input
            type="text"
            id="contactInfo"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            aria-label="Contact Information"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="datePreference">Date Preference</label>
          <input
            type="date"
            id="datePreference"
            value={datePreference}
            onChange={(e) => setDatePreference(e.target.value)}
            aria-label="Date Preference"
            required
          />
        </div>

        <h2>Select a Payment Method</h2>
        <div className="payment-options">
          {paymentMethods.map((method) => (
            <div key={method} className="payment-option">
              <input
                type="radio"
                id={method}
                name="paymentMethod"
                value={method}
                checked={selectedPaymentMethod === method}
                onChange={() => handlePaymentSelect(method)}
              />
              <label htmlFor={method}>{method}</label>
            </div>
          ))}
        </div>

        <button type="submit">Submit Booking</button>
      </form>

      <p><button onClick={() => navigate('/')}>Back to Landing Page</button></p>
    </div>
  );
};

export default BookingPage;