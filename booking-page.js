// Vehicle data with luxury, economy, and high-performance cars
const vehicles = [
    // Luxury Cars
    {
        id: 1,
        name: "Mercedes S-Class",
        type: "luxury",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=250&fit=crop",
        price: 150,
        rating: 4.9,
        reviews: 245,
        seats: 5,
        fuel: "Petrol",
        transmission: "Automatic",
        features: ["Luxury Interior", "Massage Seats", "Premium Sound"],
        available: true
    },
    {
        id: 2,
        name: "Range Rover Evoque",
        type: "luxury",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=250&fit=crop",
        price: 120,
        rating: 4.8,
        reviews: 189,
        seats: 5,
        fuel: "Diesel",
        transmission: "Automatic",
        features: ["4WD", "Terrain Response", "Panoramic Roof"],
        available: true
    },
    {
        id: 3,
        name: "Audi A6",
        type: "luxury",
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=250&fit=crop",
        price: 110,
        rating: 4.7,
        reviews: 156,
        seats: 5,
        fuel: "Petrol",
        transmission: "Automatic",
        features: ["Virtual Cockpit", "Bang & Olufsen", "Quattro AWD"],
        available: true
    },
    {
        id: 4,
        name: "Lexus ES",
        type: "luxury",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=250&fit=crop",
        price: 95,
        rating: 4.6,
        reviews: 134,
        seats: 5,
        fuel: "Hybrid",
        transmission: "Automatic",
        features: ["Hybrid Engine", "Mark Levinson Audio", "Safety+"],
        available: true
    },
    // Economy Cars
    {
        id: 5,
        name: "Toyota Camry",
        type: "economy",
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=250&fit=crop",
        price: 45,
        rating: 4.5,
        reviews: 298,
        seats: 5,
        fuel: "Petrol",
        transmission: "Automatic",
        features: ["Fuel Efficient", "Toyota Safety", "Apple CarPlay"],
        available: true
    },
    {
        id: 6,
        name: "Honda Accord",
        type: "economy",
        image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=400&h=250&fit=crop",
        price: 42,
        rating: 4.4,
        reviews: 267,
        seats: 5,
        fuel: "Petrol",
        transmission: "CVT",
        features: ["Honda Sensing", "Spacious Interior", "Good Mileage"],
        available: true
    },
    {
        id: 7,
        name: "Nissan Altima",
        type: "economy",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=250&fit=crop",
        price: 40,
        rating: 4.3,
        reviews: 198,
        seats: 5,
        fuel: "Petrol",
        transmission: "CVT",
        features: ["ProPILOT Assist", "Zero Gravity Seats", "Bose Audio"],
        available: true
    },
    {
        id: 8,
        name: "Mazda 6",
        type: "economy",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=250&fit=crop",
        price: 38,
        rating: 4.2,
        reviews: 156,
        seats: 5,
        fuel: "Petrol",
        transmission: "Automatic",
        features: ["SKYACTIV Technology", "Premium Interior", "i-ACTIVSENSE"],
        available: true
    },
    // High-Performance Cars
    {
        id: 9,
        name: "BMW M3",
        type: "performance",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=250&fit=crop",
        price: 180,
        rating: 4.9,
        reviews: 89,
        seats: 4,
        fuel: "Petrol",
        transmission: "Manual",
        features: ["M Performance", "Track Mode", "Carbon Fiber"],
        available: true
    },
    {
        id: 10,
        name: "Lamborghini Huracán",
        type: "performance",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=250&fit=crop",
        price: 500,
        rating: 5.0,
        reviews: 34,
        seats: 2,
        fuel: "Petrol",
        transmission: "Automatic",
        features: ["V10 Engine", "Lamborghini Dinamica", "Carbon Package"],
        available: false
    },
    {
        id: 11,
        name: "Porsche 911",
        type: "performance",
        image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=400&h=250&fit=crop",
        price: 350,
        rating: 4.8,
        reviews: 67,
        seats: 4,
        fuel: "Petrol",
        transmission: "PDK",
        features: ["Flat-6 Engine", "Sport Chrono", "PASM"],
        available: true
    },
    // Bikes
    {
        id: 12,
        name: "Royal Enfield Classic",
        type: "bike",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop",
        price: 25,
        rating: 4.6,
        reviews: 189,
        seats: 2,
        fuel: "Petrol",
        transmission: "Manual",
        features: ["Helmet", "Toolkit", "Classic Design"],
        available: true
    },
    {
        id: 13,
        name: "Yamaha FZ",
        type: "bike",
        image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&h=250&fit=crop",
        price: 20,
        rating: 4.5,
        reviews: 145,
        seats: 2,
        fuel: "Petrol",
        transmission: "Manual",
        features: ["Helmet", "Phone Holder", "LED Lights"],
        available: true
    }
];

// State variables
let selectedType = 'all';
let priceRange = [0, 500];
let sortBy = 'price';
let favorites = new Set();

// DOM elements
const vehiclesGrid = document.getElementById('vehiclesGrid');
const vehicleCount = document.getElementById('vehicleCount');
const noResults = document.getElementById('noResults');
const filterButtons = document.querySelectorAll('.filter-btn');
const priceMinSlider = document.getElementById('priceMin');
const priceMaxSlider = document.getElementById('priceMax');
const minPriceDisplay = document.getElementById('minPrice');
const maxPriceDisplay = document.getElementById('maxPrice');
const sortSelect = document.getElementById('sortBy');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set default date values
    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];
    
    document.getElementById('pickupDate').value = today;
    document.getElementById('pickupDate').min = today;
    document.getElementById('returnDate').value = tomorrowStr;
    document.getElementById('returnDate').min = today;
    
    // Add event listeners
    setupEventListeners();
    
    // Initial render
    renderVehicles();
});

function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedType = this.dataset.type;
            renderVehicles();
        });
    });
    
    // Price sliders
    priceMinSlider.addEventListener('input', updatePriceRange);
    priceMaxSlider.addEventListener('input', updatePriceRange);
    
    // Sort select
    sortSelect.addEventListener('change', function() {
        sortBy = this.value;
        renderVehicles();
    });
    
    // Date validation
    document.getElementById('pickupDate').addEventListener('change', function() {
        const returnDateInput = document.getElementById('returnDate');
        returnDateInput.min = this.value;
        if (returnDateInput.value < this.value) {
            returnDateInput.value = this.value;
        }
    });
}

function updatePriceRange() {
    let min = parseInt(priceMinSlider.value);
    let max = parseInt(priceMaxSlider.value);
    
    // Ensure min is not greater than max
    if (min > max) {
        if (this === priceMinSlider) {
            max = min;
            priceMaxSlider.value = max;
        } else {
            min = max;
            priceMinSlider.value = min;
        }
    }
    
    priceRange = [min, max];
    minPriceDisplay.textContent = min;
    maxPriceDisplay.textContent = max;
    renderVehicles();
}

function filterVehicles() {
    return vehicles.filter(vehicle => {
        // Type filter
        if (selectedType !== 'all' && vehicle.type !== selectedType) {
            return false;
        }
        
        // Price filter
        if (vehicle.price < priceRange[0] || vehicle.price > priceRange[1]) {
            return false;
        }
        
        return true;
    });
}

function sortVehicles(vehicleArray) {
    return vehicleArray.sort((a, b) => {
        if (sortBy === 'price') {
            return a.price - b.price;
        } else if (sortBy === 'rating') {
            return b.rating - a.rating;
        }
        return 0;
    });
}

function createVehicleCard(vehicle) {
    const isFavorite = favorites.has(vehicle.id);
    
    return `
        <div class="vehicle-card">
            <div class="vehicle-image">
                <img src="${vehicle.image}" alt="${vehicle.name}">
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${vehicle.id})">
                    <i class="fas fa-heart"></i>
                </button>
                ${!vehicle.available ? `
                    <div class="unavailable-overlay">
                        <div class="unavailable-badge">Not Available</div>
                    </div>
                ` : ''}
            </div>
            
            <div class="vehicle-content">
                <div class="vehicle-header">
                    <div class="vehicle-info">
                        <h3>${vehicle.name}</h3>
                        <div class="vehicle-type">${vehicle.type}</div>
                    </div>
                    <div class="vehicle-price">
                        <div class="price">₹${vehicle.price}</div>
                        <div class="price-unit">per day</div>
                    </div>
                </div>
                
                <div class="vehicle-rating">
                    <i class="fas fa-star star"></i>
                    <span class="rating-score">${vehicle.rating}</span>
                    <span class="rating-reviews">(${vehicle.reviews} reviews)</span>
                </div>
                
                <div class="vehicle-specs">
                    <div class="spec">
                        <i class="fas fa-users"></i>
                        <span>${vehicle.seats}</span>
                    </div>
                    <div class="spec">
                        <i class="fas fa-gas-pump"></i>
                        <span>${vehicle.fuel}</span>
                    </div>
                    <div class="spec">
                        <i class="fas fa-cog"></i>
                        <span>${vehicle.transmission}</span>
                    </div>
                </div>
                
                <div class="vehicle-features">
                    ${vehicle.features.slice(0, 3).map(feature => 
                        `<div class="feature-badge">${feature}</div>`
                    ).join('')}
                </div>
                
                <button class="book-btn" ${!vehicle.available ? 'disabled' : ''} onclick="bookVehicle(${vehicle.id})">
                    ${vehicle.available ? 'Book Now' : 'Unavailable'}
                </button>
            </div>
        </div>
    `;
}

function renderVehicles() {
    const filteredVehicles = filterVehicles();
    const sortedVehicles = sortVehicles(filteredVehicles);
    
    vehicleCount.textContent = sortedVehicles.length;
    
    if (sortedVehicles.length === 0) {
        vehiclesGrid.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        vehiclesGrid.style.display = 'grid';
        noResults.style.display = 'none';
        vehiclesGrid.innerHTML = sortedVehicles.map(createVehicleCard).join('');
    }
}

function toggleFavorite(vehicleId) {
    if (favorites.has(vehicleId)) {
        favorites.delete(vehicleId);
    } else {
        favorites.add(vehicleId);
    }
    renderVehicles();
}

function bookVehicle(vehicleId) {
    const vehicle = vehicles.find(v => v.id === vehicleId);
    if (vehicle && vehicle.available) {
        const pickupDate = document.getElementById('pickupDate').value;
        const returnDate = document.getElementById('returnDate').value;
        const location = document.getElementById('searchLocation').value || 'Selected location';
        
        alert(`Booking ${vehicle.name} for ₹${vehicle.price}/day\nPickup: ${pickupDate}\nReturn: ${returnDate}\nLocation: ${location}\n\nRedirecting to payment...`);
        // Here you would typically redirect to a booking form or payment page
    }
}

// Search functionality
document.querySelector('.search-btn').addEventListener('click', function() {
    const location = document.getElementById('searchLocation').value;
    const pickupDate = document.getElementById('pickupDate').value;
    const returnDate = document.getElementById('returnDate').value;
    
    if (!location || !pickupDate || !returnDate) {
        alert('Please fill in all search fields');
        return;
    }
    
    console.log('Searching for vehicles:', { location, pickupDate, returnDate });
    // Here you would typically filter vehicles based on location and dates
    alert(`Searching for vehicles in ${location} from ${pickupDate} to ${returnDate}`);
});