import React, { useState, useEffect } from 'react';
import '../styles/OutfitterCard.css';

const OutfitterCard = ({ outfitter, bookmarked, onBookmark }) => {
  const [ratings, setRatings] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(0);

  useEffect(() => {
    const storedRatings = JSON.parse(localStorage.getItem(`ratings-${outfitter.id}`)) || [];
    setRatings(storedRatings);
  }, [outfitter.id]);

  const handleAddReview = () => {
    if (newReview.trim() && newRating > 0) {
      const updatedRatings = [...ratings, { rating: newRating, review: newReview }];
      setRatings(updatedRatings);
      localStorage.setItem(`ratings-${outfitter.id}`, JSON.stringify(updatedRatings));
      setNewReview('');
      setNewRating(0);
    }
  };

  const calculateAverageRating = () => {
    if (ratings.length === 0) return 0;
    const totalRating = ratings.reduce((acc, rating) => acc + rating.rating, 0);
    return (totalRating / ratings.length).toFixed(1);
  };

  return (
    <div className="outfitter-card">
      <img className="outfitter-image" src={outfitter.imageUrl} alt={outfitter.name} />
      <div className="outfitter-content">
        <h3 className="outfitter-title">{outfitter.name}</h3>
        <p><strong>Location:</strong> {outfitter.location}</p>
        <p><strong>Services:</strong> {outfitter.services}</p>
        <p><strong>Contact:</strong> {outfitter.contact}</p>
        <p><strong>Activities:</strong> {outfitter.activities.join(', ')}</p>
        
        <div className="pricing-plans">
          <h4>Pricing Plans:</h4>
          {outfitter.pricingPlans && outfitter.pricingPlans.length > 0 ? (
            <ul>
              {outfitter.pricingPlans.map((plan) => (
                <li key={plan.id}>
                  <strong>{plan.name}:</strong> ${plan.price} - {plan.description}
                </li>
              ))}
            </ul>
          ) : (
            <p>No pricing plans available.</p>
          )}
        </div>

        <button className="bookmark-button" onClick={() => onBookmark(outfitter.id)}>
          {bookmarked ? 'Remove Bookmark' : 'Bookmark'}
        </button>

        <div className="rating-section">
          <h4>Average Rating: {calculateAverageRating()}</h4>
          <div className="review-form">
            <strong>Leave a Review:</strong>
            <textarea
              placeholder="Write your review here..."
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            />
            <input
              type="number"
              min="1"
              max="5"
              placeholder="Rate (1-5)"
              value={newRating}
              onChange={(e) => setNewRating(Number(e.target.value))}
            />
            <button onClick={handleAddReview}>Submit</button>
          </div>
        </div>

        <div className="reviews-section">
          <h4>Reviews:</h4>
          {ratings.length > 0 ? (
            ratings.map((rating, index) => (
              <div key={index} className="review">
                <p><strong>Rating:</strong> {rating.rating}</p>
                <p>{rating.review}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OutfitterCard;