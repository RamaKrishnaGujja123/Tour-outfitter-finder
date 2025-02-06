import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditOutfitter = ({ listings, updateListing }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [outfitter, setOutfitter] = useState(null);

  useEffect(() => {
    const listing = listings.find(item => item.id === parseInt(id));
    if (listing) {
      setOutfitter(listing);
    } else {
      navigate('/outfitter-dashboard'); // Redirect if outfitter not found
    }
  }, [id, listings, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOutfitter(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateListing(outfitter);
    navigate('/outfitter-dashboard');
  };

  if (!outfitter) return <p>Loading...</p>;

  return (
    <div className="edit-outfitter">
      <h1>Edit Outfitter</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={outfitter.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <input
            type="text"
            id="status"
            name="status"
            value={outfitter.status}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditOutfitter;