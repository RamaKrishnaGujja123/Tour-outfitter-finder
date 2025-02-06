const outfitters = [
  {
    id: 1,
    name: 'Mountain Gear Co.',
    location: 'Denver',
    services: 'Gear rental, permits',
    contact: '123-456-7890',
    activities: ['Hiking', 'Camping'],
    coordinates: [39.7392, -104.9903],
    imageUrl: 'https://th.bing.com/th/id/OIP.ZDqQYn5xsYWadzrR_rOewwHaE8?rs=1&pid=ImgDetMain', // Example image
    pricingPlans: [
      { id: 1, name: 'Basic', price: 50, description: 'Basic gear rental and permits' },
      { id: 2, name: 'Premium', price: 100, description: 'Premium gear rental and permits' },
    ],
  },
  {
    id: 2,
    name: 'River Adventures',
    location: 'Seattle',
    services: 'Guided tours, kayaking equipment',
    contact: '987-654-3210',
    activities: ['Kayaking', 'Fishing'],
    coordinates: [47.6062, -122.3321],
    imageUrl: 'https://th.bing.com/th/id/R.7fee145d562bf6461fe1690ea8f62b0a?rik=SPBgCDoQiJH57w&pid=ImgRaw&r=0', // Example image
    pricingPlans: [
      { id: 1, name: 'Day Tour', price: 75, description: 'Guided day tour with equipment' },
      { id: 2, name: 'Weekend Adventure', price: 150, description: 'Weekend guided tour with all equipment' },
    ],
  },
  {
    id: 3,
    name: 'Climb & Conquer',
    location: 'Salt Lake City',
    services: 'Climbing gear, safety training',
    contact: '555-123-4567',
    activities: ['Rock Climbing', 'Hiking'],
    coordinates: [40.7608, -111.8910],
    imageUrl: 'https://i.pinimg.com/originals/65/7c/55/657c558a277faaccfd9a832f91d2e96f.jpg', // Example image
    pricingPlans: [
      { id: 1, name: 'Beginner Package', price: 60, description: 'Basic gear and introductory training' },
      { id: 2, name: 'Advanced Package', price: 120, description: 'Full gear and advanced training' },
    ],
  },
  {
    id: 4,
    name: 'Trail Explorers',
    location: 'Portland',
    services: 'Trail maps, guided hikes',
    contact: '321-654-9870',
    activities: ['Hiking', 'Camping'],
    coordinates: [45.5152, -122.6784],
    imageUrl: 'https://th.bing.com/th/id/OIP.L0wKxNdOt9iEQi4xvmchOQHaEK?rs=1&pid=ImgDetMain', // Example image
    pricingPlans: [
      { id: 1, name: 'Guided Hike', price: 40, description: 'Guided hike with trail maps' },
      { id: 2, name: 'Camping Expedition', price: 100, description: 'Overnight camping with guided hikes' },
    ],
  },
  {
    id: 5,
    name: 'Adventure Watersports',
    location: 'San Diego',
    services: 'Surfboard rental, lessons',
    contact: '456-789-1230',
    activities: ['Surfing', 'Kayaking'],
    coordinates: [32.7157, -117.1611],
    imageUrl: 'https://th.bing.com/th/id/OIP.LCfsIZjaN0-bD8OdnDlK8gHaEK?rs=1&pid=ImgDetMain', // Example image
    pricingPlans: [
      { id: 1, name: 'Surfboard Rental', price: 30, description: 'Daily surfboard rental' },
      { id: 2, name: 'Surfing Lessons', price: 70, description: 'Surfing lessons with gear' },
    ],
  },
  {
    id: 6,
    name: 'Wilderness Guides',
    location: 'Anchorage',
    services: 'Survival courses, gear rentals',
    contact: '654-321-0987',
    activities: ['Camping', 'Hiking'],
    coordinates: [61.2181, -149.9003],
    imageUrl: 'https://th.bing.com/th/id/OIP.doY_9wy0Qa7DxHNzuZ_ZsQHaDZ?rs=1&pid=ImgDetMain', // Example image
    pricingPlans: [
      { id: 1, name: 'Survival Course', price: 90, description: 'Basic survival course with gear rental' },
      { id: 2, name: 'Advanced Survival', price: 150, description: 'Advanced survival techniques and gear' },
    ],
  },
  {
    id: 7,
    name: 'Desert Trekkers',
    location: 'Phoenix',
    services: 'ATV rentals, guided tours',
    contact: '789-123-4560',
    activities: ['Hiking', 'Camping', 'ATV Riding'],
    coordinates: [33.4484, -112.0740],
    imageUrl: 'https://www.shropshirestar.com/resizer/ZQWRTINcsnTdLy9GeyQsrxRUIkc=/1200x0/cloudfront-us-east-1.images.arcpublishing.com/mna/SJVJ2AQTGVHU3HLJQBAKUO4QRQ.jpg', // Example image
    pricingPlans: [
      { id: 1, name: 'ATV Rental', price: 80, description: 'Daily ATV rental' },
      { id: 2, name: 'Guided Tour', price: 120, description: 'Guided desert tour with ATV rental' },
    ],
  },
  {
    id: 8,
    name: 'Ocean Adventures',
    location: 'Miami',
    services: 'Snorkeling gear, boat rentals',
    contact: '888-555-1234',
    activities: ['Snorkeling', 'Fishing'],
    coordinates: [25.7617, -80.1918],
    imageUrl: 'https://mykonosestates.com/wp-content/uploads/2016/06/snorkeling-lg.jpg', // Example image
    pricingPlans: [
      { id: 1, name: 'Snorkeling Gear', price: 40, description: 'Daily snorkeling gear rental' },
      { id: 2, name: 'Boat Rental', price: 200, description: 'Full-day boat rental' },
    ],
  },
  {
    id: 9,
    name: 'Rocky Ridge Outfitters',
    location: 'Boulder',
    services: 'Rock climbing courses, gear rental',
    contact: '999-777-6666',
    activities: ['Rock Climbing', 'Hiking'],
    coordinates: [40.0150, -105.2705],
    imageUrl: 'https://rockridgeoutfitters.com/wp-content/uploads/2021/02/IMG_1084.jpg', // Example image
    pricingPlans: [
      { id: 1, name: 'Climbing Gear', price: 50, description: 'Daily climbing gear rental' },
      { id: 2, name: 'Climbing Course', price: 150, description: 'Full-day rock climbing course' },
    ],
  },
  {
    id: 10,
    name: 'Evergreen Adventures',
    location: 'Seattle',
    services: 'Eco-tours, camping gear',
    contact: '123-777-8888',
    activities: ['Camping', 'Hiking', 'Eco Tours'],
    coordinates: [47.6062, -122.3321],
    imageUrl: 'https://transguyana.net/wp-content/uploads/2019/08/Kaieteur-Orinduik-header-1024x512.jpg', // Example image
    pricingPlans: [
      { id: 1, name: 'Eco-Tour', price: 60, description: 'Guided eco-tour with equipment' },
      { id: 2, name: 'Camping Package', price: 120, description: 'Full camping gear and guided tour' },
    ],
  },
];

export default outfitters;