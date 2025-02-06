import React, { useState, useEffect } from 'react';
import OutfitterCard from './OutfitterCard';
import Map from './Map';
import AdvancedSearchFilters from './AdvancedSearchFilters';
import outfitters from '../data/outfitters';

const FindOutfitter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activityFilter, setActivityFilter] = useState('');
  const [sortOption, setSortOption] = useState('popularity');
  const [bookmarked, setBookmarked] = useState([]);
  const [userLocation, setUserLocation] = useState([39.8283, -98.5795]);
  const [filteredOutfitters, setFilteredOutfitters] = useState(outfitters);
  const [filters, setFilters] = useState({ difficulty: '', duration: '', groupSize: '' });

  const handleSearch = () => {
    const results = outfitters
      .filter((outfitter) =>
        outfitter.location.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!activityFilter || outfitter.activities.includes(activityFilter)) &&
        (!filters.difficulty || outfitter.difficulty === filters.difficulty) &&
        (!filters.duration || outfitter.duration <= filters.duration) &&
        (!filters.groupSize || outfitter.groupSize <= filters.groupSize)
      )
      .sort((a, b) => {
        if (sortOption === 'popularity') {
          return (b.averageRating || 0) - (a.averageRating || 0);
        } else if (sortOption === 'newness') {
          return b.id - a.id;
        }
        return 0;
      });
    setFilteredOutfitters(results);
  };

  const handleBookmark = (outfitterId) => {
    setBookmarked((prevBookmarks) =>
      prevBookmarks.includes(outfitterId)
        ? prevBookmarks.filter((id) => id !== outfitterId)
        : [...prevBookmarks, outfitterId]
    );
  };

  const getMapCenter = () => {
    if (filteredOutfitters.length === 0) {
      return userLocation;
    }
    const latSum = filteredOutfitters.reduce((sum, outfitter) => sum + outfitter.coordinates[0], 0);
    const lngSum = filteredOutfitters.reduce((sum, outfitter) => sum + outfitter.coordinates[1], 0);
    return [latSum / filteredOutfitters.length, lngSum / filteredOutfitters.length];
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error('Error detecting location:', error);
      }
    );
  }, []);

  return (
    <div className="find-outfitter">
      <section className="hero-section">
        <h1>Find Your Adventure Outfitters</h1>
        <p>Explore the best outdoor gear and guides based on your location.</p>

        <input
          type="text"
          placeholder="Enter location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        <select value={activityFilter} onChange={(e) => setActivityFilter(e.target.value)}>
          <option value="">All Activities</option>
          <option value="Hiking">Hiking</option>
          <option value="Camping">Camping</option>
          <option value="Rock Climbing">Rock Climbing</option>
          <option value="Kayaking">Kayaking</option>
          <option value="Fishing">Fishing</option>
          <option value="Surfing">Surfing</option>
          <option value="Snorkeling">Snorkeling</option>
          <option value="ATV Riding">ATV Riding</option>
        </select>

        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="popularity">Sort by Popularity</option>
          <option value="newness">Sort by Newest</option>
        </select>

        <AdvancedSearchFilters onFilterChange={setFilters} />
      </section>

      <Map outfitters={filteredOutfitters} center={getMapCenter()} />

      <div className="outfitter-list">
        {filteredOutfitters.map((outfitter) => (
          <OutfitterCard
            key={outfitter.id}
            outfitter={outfitter}
            bookmarked={bookmarked.includes(outfitter.id)}
            onBookmark={() => handleBookmark(outfitter.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FindOutfitter;