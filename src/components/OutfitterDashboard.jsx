import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OutfitterDashboard = () => {
  const [listings, setListings] = useState([
    { id: 1, name: 'Mountain Adventures', status: 'Active' },
    { id: 2, name: 'River Expeditions', status: 'Active' },
  ]);
  
  const navigate = useNavigate();

  const handleEdit = (id) => {
    // Navigate to the edit page with the outfitter id
    navigate(`/edit-outfitter/${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete logic here
    setListings(listings.filter(listing => listing.id !== id));
  };

  return (
    <div className="outfitter-dashboard">
      <h1>Your Listings</h1>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}>
            {listing.name} - {listing.status}
            <button onClick={() => handleEdit(listing.id)}>Edit</button>
            <button onClick={() => handleDelete(listing.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OutfitterDashboard;