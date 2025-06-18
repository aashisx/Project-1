// Vehicle data with luxury, economy, and high-performance cars
const vehicles = [
    // Luxury Cars
    {
        id: 1,
        name: "Mercedes  benz S-Class",
        type: "luxury",
        image: "https://media.ed.edmunds-media.com/mercedes-benz/s-class/2025/oem/2025_mercedes-benz_s-class_sedan_amg-s-63-e-performance_fq_oem_1_1600.jpg",
        price:  150,
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
        image: "https://www.ezoomed.com/wp-content/uploads/2021/06/ev-1.jpg",
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
        image: "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/03/1143385-33.jpg",
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
        image: "https://focus.independent.ie/thumbor/LQX9mX1RvWPfSeGf41mVYu2YiXo=/0x107:800x548/960x640/prod-mh-ireland/41ee89ee-c561-11ed-9dd2-0210609a3fe2",
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
        image: "https://static3.toyotabharat.com/images/showroom/new-camry/elegance-1000x313.png",
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
        image: "https://media.ed.edmunds-media.com/honda/accord/2025/oem/2025_honda_accord_sedan_sport-l-hybrid_fq_oem_1_1600.jpg",
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
        image: "https://media.ed.edmunds-media.com/nissan/altima/2025/oem/2025_nissan_altima_sedan_25-sv_fq_oem_1_1600.jpg",
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
        image: "https://www.cnet.com/a/img/resize/7b895bd6646c11cecb555787347418dd6c81db10/hub/2021/06/10/0de6b99a-c87f-4cc3-9a6a-f23245e3de03/mazda6-lead.jpg?auto=webp&width=1200",
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
        image: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fbmw%2Fm3%2Fbmw-m3.jpg%3Fv%3D12&w=3840&q=75",
        price: 500,
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
        name: "BMW M5 CS",
        type: "performance",
        image: "https://www.automoblog.com/wp-content/uploads/2021/01/2022-BMW-M5-CS-Sedan-3.jpg",
        price: 500,
        rating: 5.0,
        reviews: 112,
        seats: 4,
        fuel: "Petrol",
        transmission: "M Steptronic transmission ",
        features: ["M Performance", "Track Mode", "Carbon Fiber"],
        available: true
    },
    {
        id: 11,
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
        id: 12,
        name: "Porsche 911",
        type: "performance",
        image: "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXkBuNYdMGF4tl3U0%25z8rMH1spbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmHlCgI7Zl2dioCxkF%25vUqCNwuWXsO7QNeV6iTxjgzhRc2LUjqA7fQrmVOJUPYDImTB8VuyY0oVk0DBRlqvzpQNqjdtAsvyJ5I",
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
        id: 13,
        name: "Royal Enfield Classic",
        type: "bike",
        image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/183389/classic-350-right-front-three-quarter-13.jpeg?isig=0",
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
        id: 14,
        name: "Yamaha FZ",
        type: "bike",
        image: "https://www.maw2wheelers.com/wp-content/uploads/2024/09/FZ-FI-V3-Blue.jpg",
        price: 20,
        rating: 4.5,
        reviews: 145,
        seats: 2,
        fuel: "Petrol",
        transmission: "Manual",
        features: ["Helmet", "Phone Holder", "LED Lights"],
        available: true
    },
    {
        id: 15,
        name: "Mercedes maybach S-Class",
        type: "luxury",
        image: "https://images.netdirector.co.uk/gforces-auto/image/upload/w_412,h_309,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/945fb96980ef9653e3e9375fe4e43b49/01_s_class_maybach_onyxschwarz_kalahari_gold_metallic_f2.png",
        price: 150,
        rating: 4.9,
        reviews: 245,
        seats: 5,
        fuel: "Petrol",
        transmission: "Automatic",
        features: ["Luxury Interior", "Massage Seats", "Premium Sound"],
        available: true
    },
    // ... (previous vehicles remain unchanged)

    // Additional Luxury Cars
    {
        id: 16,
        name: "Rolls-Royce Ghost",
        type: "luxury",
        image: "https://images.unsplash.com/photo-1624441740188-15b9c1f4f9a5",
        price: 450,
        rating: 5.0,
        reviews: 78,
        seats: 4,
        fuel: "Petrol",
        transmission: "Automatic",
        features: ["Handcrafted Interior", "Starlight Headliner", "Magic Carpet Ride"],
        available: true
    },
    {
        id: 17,
        name: "Bentley Continental GT",
        type: "luxury",
        image: "https://www.bentleymedia.com/image/997b4e95-4ac0-48e1-9bc2-eab2861d0170?anchor=middlecenter&bgcolor=Transparent&borderWidth=0&crop=0%2C0%2C0%2C0&width=460",
        price: 280,
        rating: 4.9,
        reviews: 92,
        seats: 4,
        fuel: "Petrol",
        transmission: "Automatic",
        features: ["W12 Engine", "Mulliner Driving Spec", "20", "Alloy Wheels"],
        available: true
    },

    // Additional Economy Cars
    {
        id: 18,
        name: "Hyundai Elantra",
        type: "economy",
        image: "https://hips.hearstapps.com/hmg-prod/images/2024-hyundai-elantra-n-lightning-lap-2025-178-67b0a408c7cd0.jpg?crop=0.590xw:0.498xh;0.232xw,0.310xh&resize=2048:*",
        price: 35,
        rating: 4.3,
        reviews: 187,
        seats: 5,
        fuel: "Petrol",
        transmission: "Automatic",
        features: ["SmartSense", "10.25", "Display", "Wireless Charging"],
        available: true,
    },
    {
        id: 19,
        name: "Kia K5",
        type: "economy",
        image: "https://i.gaw.to/content/photos/59/50/595062-un-vent-de-fraicheur-souffle-sur-la-kia-k5.jpg?1024x640",
        price: 37,
        rating: 4.4,
        reviews: 156,
        seats: 5,
        fuel: "Petrol",
        transmission: "Automatic",
        features: ["GT-Line Package", "Panoramic Sunroof", "Advanced Safety"],
        available: true
    },

    // Additional Performance Cars
    {
        id: 20,
        name: "Ferrari 488 GTB",
        type: "performance",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs1qXDCPn9qeNUYAqq8nst_-6LjAlmHf3zxw&s",
        price: 600,
        rating: 4.9,
        reviews: 45,
        seats: 2,
        fuel: "Petrol",
        transmission: "Automatic",
        features: ["Twin-Turbo V8", "F1-Trac", "Carbon Ceramic Brakes"],
        available: true
    },
    {
        id: 21,
        name: "McLaren 720S",
        type: "performance",
        image: "https://cdn.motor1.com/images/mgl/krMYM/s3/mclaren-720s-spider-by-mso.jpg",
        price: 550,
        rating: 4.8,
        reviews: 38,
        seats: 2,
        fuel: "Petrol",
        transmission: "Automatic",
        features: ["Monocage II", "Active Dynamics Panel", "Dihedral Doors"],
        available: false
    },
    {
        id: 22,
        name: "Audi R8",
        type: "performance",
        image: "https://hips.hearstapps.com/hmg-prod/images/2021-audi-r8-mmp-1-1603746624.jpg?crop=0.756xw:0.568xh;0.220xw,0.316xh&resize=1200:*",
        price: 400,
        rating: 4.7,
        reviews: 56,
        seats: 2,
        fuel: "Petrol",
        transmission: "Automatic",
        features: ["V10 Engine", "Quattro AWD", "Virtual Cockpit"],
        available: true
    },

    // Additional Bikes
    {
        id: 23,
        name: "Harley-Davidson Street Glide",
        type: "bike",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
        price: 50,
        rating: 4.7,
        reviews: 112,
        seats: 2,
        fuel: "Petrol",
        transmission: "Manual",
        features: ["Boom! Box GTS", "Milwaukee-Eight 114", "Tour-Pak Luggage"],
        available: true
    },
    {
        id: 24,
        name: "Ducati Panigale V4",
        type: "bike",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2VVvf8rJHxrLpEVNd1Xlh7yAQwlxraCRyCR-CtneB1TZVeDa3k4ntwRxxI9exx5-PZIA&usqp=CAU",
        price: 60,
        rating: 4.9,
        reviews: 89,
        seats: 1,
        fuel: "Petrol",
        transmission: "Manual",
        features: ["Desmosedici Stradale", "Aerodynamic Winglets", "Ohlins Suspension"],
        available: true
    },
    {
        id: 25,
        name: "Kawasaki Ninja H2",
        type: "bike",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Kawasaki_Ninja_H2.jpg/1200px-Kawasaki_Ninja_H2.jpg",
        price: 70,
        rating: 5.0,
        reviews: 67,
        seats: 1,
        fuel: "Petrol",
        transmission: "Manual",
        features: ["Supercharged Engine", "Aerodynamic Design", "Brembo Brakes"],
        available: true
    },
    {
        id: 26,
        name: "Triumph Bonneville T120",
        type: "bike",
        image: "https://remmotorcycle.com/cdn/shop/files/DYNASOUNDEXHAUST_5_600x.jpg?v=1738091395",
        price: 30,
        rating: 4.6,
        reviews: 98,
        seats: 2,
        fuel: "Petrol",
        transmission: "Manual",
        features: ["Classic Design", "Torque-Assist Clutch", "USB Charging"],
        available: true
    },
    {
        id: 27,
        name: "BMW R 1250 GS",
        type: "bike",
        image: "https://brisans.imgix.net/2024-Models/BMW-Motorrad/R-1250-GS-Adventure-Ultimate-Edition.jpg?fit=max&auto=format,compress&w=730&h=auto",
        price: 55,
        rating: 4.8,
        reviews: 124,
        seats: 2,
        fuel: "Petrol",
        transmission: "Manual",
        features: ["ShiftCam Technology", "Dynamic ESA", "TFT Display"],
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
    // --- Add this block ---
    const params = new URLSearchParams(window.location.search);
    const urlType = params.get('type');
    if (urlType) {
        selectedType = urlType;
        filterButtons.forEach(b => {
            b.classList.toggle('active', b.dataset.type === urlType);
        });
    }
    // --- End block ---

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
                        <div class="price">$ ${vehicle.price}</div>
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
        
        alert(`Booking ${vehicle.name} for $ ${vehicle.price}/day\nPickup: ${pickupDate}\nReturn: ${returnDate}\nLocation: ${location}\n\nRedirecting to payment...`);
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