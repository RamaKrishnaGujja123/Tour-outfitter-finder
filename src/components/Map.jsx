import L from 'leaflet';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Define a custom icon with the placeholder icon from Flaticon
const customIcon = L.icon({
  iconUrl: 'https://logodownload.org/wp-content/uploads/2018/01/google-maps-logo-4-1.png', // Correct Flaticon icon URL
  iconSize: [40, 40], // Width and height of the icon
  iconAnchor: [20, 40], // Anchor point for the icon
  popupAnchor: [0, -40], // Positioning for popup
});

const Map = ({ outfitters, center }) => {
  // Fetch real-time weather and nearby attractions (mock data used here)
  const weather = 'Sunny, 25°C';
  const attractions = ['Park', 'Museum', 'Restaurant'];

  return (
    <MapContainer center={center} zoom={6} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {outfitters.map(outfitter => (
        <Marker
          key={outfitter.id}
          position={outfitter.coordinates}
          icon={customIcon} // Apply custom icon
        >
          <Popup>
            <img src={outfitter.imageUrl} alt={outfitter.name} style={{ width: '100%', height: 'auto' }} />
            <strong>{outfitter.name}</strong>
            <p>{outfitter.location}</p>
            <p>{outfitter.services}</p>
            <p>Contact: {outfitter.contact}</p>
            <p>Activities: {outfitter.activities.join(', ')}</p>
            <p><strong>Weather:</strong> {weather}</p>
            <p><strong>Nearby Attractions:</strong> {attractions.join(', ')}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;