import React, { useState, useEffect } from 'react';

const LoyaltyProgram = ({ user }) => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const storedPoints = JSON.parse(localStorage.getItem(`points-${user.id}`)) || 0;
    setPoints(storedPoints);
  }, [user.id]);

  const addPoints = (amount) => {
    const updatedPoints = points + amount;
    setPoints(updatedPoints);
    localStorage.setItem(`points-${user.id}`, JSON.stringify(updatedPoints));
  };

  return (
    <div className="loyalty-program">
      <h3>Loyalty Program</h3>
      <p>You have {points} points.</p>
      <button onClick={() => addPoints(10)}>Add 10 Points</button>
    </div>
  );
};

export default LoyaltyProgram;