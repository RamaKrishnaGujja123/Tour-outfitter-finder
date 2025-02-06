import React, { useState } from 'react';
import LoyaltyProgram from './LoyaltyProgram';

const ProfilePage = () => {
  const initialUser = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: '',  // Add profile picture field
    bookings: [
      { id: 1, outfitter: 'Mountain Adventures', date: '2024-01-15' },
      { id: 2, outfitter: 'River Expeditions', date: '2024-02-20' },
    ],
    favorites: [
      { id: 1, name: 'Mountain Adventures' },
      { id: 2, name: 'River Expeditions' },
    ],
  };

  const [user, setUser] = useState(initialUser);

  const handleCancelBooking = (id) => {
    setUser((prevUser) => ({
      ...prevUser,
      bookings: prevUser.bookings.filter((booking) => booking.id !== id),
    }));
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUser((prevUser) => ({
        ...prevUser,
        profilePicture: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page">
      <h1>Your Profile</h1>
      {user.profilePicture && <img src={user.profilePicture} alt="Profile" className="profile-picture" />}
      <input type="file" onChange={handleProfilePictureChange} />
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <h2>Your Bookings</h2>
      <ul>
        {user.bookings.map((booking) => (
          <li key={booking.id}>
            {booking.outfitter} - {booking.date}
            <button onClick={() => handleCancelBooking(booking.id)}>Cancel Booking</button>
          </li>
        ))}
      </ul>

      <h2>Your Favorites</h2>
      <ul>
        {user.favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
      </ul>

      <LoyaltyProgram user={user} />
    </div>
  );
};

export default ProfilePage;