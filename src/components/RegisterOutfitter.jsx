import React, { useState } from 'react';

const RegisterOutfitter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [services, setServices] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [phone, setPhone] = useState('');
  const [availabilityDate, setAvailabilityDate] = useState('');
  const [socialMediaLinks, setSocialMediaLinks] = useState('');
  const [certification, setCertification] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [basicPrice, setBasicPrice] = useState('');
  const [premiumPrice, setPremiumPrice] = useState('');

  const validateForm = () => {
    let formErrors = {};
    if (!name) formErrors.name = 'Name is required';
    if (!email) formErrors.email = 'Email is required';
    if (!location) formErrors.location = 'Location is required';
    if (!description) formErrors.description = 'Description is required';
    if (!services) formErrors.services = 'Please select at least one service';
    if (!phone) formErrors.phone = 'Phone number is required';
    if (!availabilityDate) formErrors.availabilityDate = 'Availability date is required';
    if (!termsAccepted) formErrors.termsAccepted = 'You must accept the terms and conditions';
    if (!basicPrice) formErrors.basicPrice = 'Basic price is required';
    if (!premiumPrice) formErrors.premiumPrice = 'Premium price is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log({
        name,
        email,
        location,
        description,
        services,
        profilePicture,
        phone,
        availabilityDate,
        socialMediaLinks,
        certification,
        basicPrice,
        premiumPrice,
      });
      // Clear the form
      setName('');
      setEmail('');
      setLocation('');
      setDescription('');
      setServices('');
      setProfilePicture(null);
      setPhone('');
      setAvailabilityDate('');
      setSocialMediaLinks('');
      setCertification(null);
      setTermsAccepted(false);
      setBasicPrice('');
      setPremiumPrice('');
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setLocation('');
    setDescription('');
    setServices('');
    setProfilePicture(null);
    setPhone('');
    setAvailabilityDate('');
    setSocialMediaLinks('');
    setCertification(null);
    setTermsAccepted(false);
    setBasicPrice('');
    setPremiumPrice('');
    setErrors({});
  };

  return (
    <div className="register-outfitter">
      <section className="hero-section">
        <h1>Register as an Outfitter</h1>
        <p>Join our community and offer your services to adventure seekers.</p>
      </section>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            {errors.location && <span className="error">{errors.location}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Tell us about your services"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
            {errors.description && <span className="error">{errors.description}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="services">Services Offered</label>
            <select
              id="services"
              value={services}
              onChange={(e) => setServices(e.target.value)}
              required
            >
              <option value="">Select services</option>
              <option value="hiking">Hiking</option>
              <option value="camping">Camping</option>
              <option value="fishing">Fishing</option>
              <option value="kayaking">Kayaking</option>
            </select>
            {errors.services && <span className="error">{errors.services}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="availabilityDate">Availability Date</label>
            <input
              type="date"
              id="availabilityDate"
              value={availabilityDate}
              onChange={(e) => setAvailabilityDate(e.target.value)}
              required
            />
            {errors.availabilityDate && <span className="error">{errors.availabilityDate}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="socialMediaLinks">Social Media Links</label>
            <input
              type="text"
              id="socialMediaLinks"
              placeholder="Enter your social media links"
              value={socialMediaLinks}
              onChange={(e) => setSocialMediaLinks(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="certification">Certification/License</label>
            <input
              type="file"
              id="certification"
              onChange={(e) => setCertification(e.target.files[0])}
            />
          </div>

          <div className="form-group">
            <label htmlFor="profilePicture">Profile Picture</label>
            <input
              type="file"
              id="profilePicture"
              onChange={(e) => setProfilePicture(e.target.files[0])}
            />
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />{' '}
              I accept the terms and conditions
            </label>
            {errors.termsAccepted && <span className="error">{errors.termsAccepted}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="basicPrice">Basic Plan Price</label>
            <input
              type="number"
              id="basicPrice"
              placeholder="Enter the price for the Basic Plan"
              value={basicPrice}
              onChange={(e) => setBasicPrice(e.target.value)}
              required
            />
            {errors.basicPrice && <span className="error">{errors.basicPrice}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="premiumPrice">Premium Plan Price</label>
            <input
              type="number"
              id="premiumPrice"
              placeholder="Enter the price for the Premium Plan"
              value={premiumPrice}
              onChange={(e) => setPremiumPrice(e.target.value)}
              required
            />
            {errors.premiumPrice && <span className="error">{errors.premiumPrice}</span>}
          </div>

          <button type="submit">Register</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterOutfitter;