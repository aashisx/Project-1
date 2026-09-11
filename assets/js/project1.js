jQuery(document).ready(function ($) {
    $('#datepicker').datepicker();
});



document.addEventListener("DOMContentLoaded", function () {
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card) => {
    card.addEventListener("click", function () {
      const url = card.dataset.url;
   
      const typeText = card.querySelector('.card_content h3')?.textContent?.toLowerCase();
      let typeParam = '';
      if (typeText) {
        if (typeText.includes('car')) typeParam = 'luxury';
        else if (typeText.includes('bike')) typeParam = 'bike';
        else if (typeText.includes('taxi')) typeParam = 'economy';
        else if (typeText.includes('plane')) typeParam = 'performance';
      }
      if (url) {
        window.location.href = typeParam ? `${url}?type=${typeParam}` : url;
      }
    });
  });

  const buttons = document.querySelectorAll(".expand-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation(); 

      const currentItem = button.closest(".service-card");
      const isExpanded = currentItem.classList.contains("expanded");

      const allItems = document.querySelectorAll(".service-card");

      if (!isExpanded) {
        allItems.forEach((item) => {
          if (item !== currentItem) {
            item.classList.add("hidden"); 
            item.classList.remove("expanded"); 
          } else {
            item.classList.remove("hidden");  
            item.classList.add("expanded"); 
          }
        });
      } else {
        allItems.forEach((item) => {
          item.classList.remove("hidden", "expanded");
        });
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const serviceCards = document.querySelectorAll(".btn-st");
  serviceCards.forEach((card) => {
    card.addEventListener("click", function () {
      const url = card.dataset.url;
      if (url) {
        window.location.href = url;
      }
    });
  });
});
$(document).ready(function () {
  let currentSlide = 0;
  const slides = $('.slide');

  function showSlide(index) {
    const offset = -index * 100 + '%';
    $('.slider').css('transform', 'translateX(' + offset + ')');
  }

  $('.next').click(function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  $('.prev').click(function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
});
  document.addEventListener("DOMContentLoaded", function () {
  const slidercontainer = document.querySelectorAll(".slider-cotainer . book-now");
  slidercontainer.forEach((slider) => {
    slider.addEventListener("click", function () {
      const url = card.dataset.url;
      // Get the type from the card content (e.g., Cars, Bikes, Taxi, Planes)
      const typeText = slider.querySelector('.card_content h3')?.textContent?.toLowerCase();
      let typeParam = '';
      if (typeText) {
        if (typeText.includes('car')) typeParam = 'luxury'; // or 'economy' if you want both
        else if (typeText.includes('Book Car')) typeParam = 'bike';
        else if (typeText.includes('Book Bus')) typeParam = 'economy';
        else if (typeText.includes('Book Plane')) typeParam = 'performance';
      }
      if (url) {
        window.location.href = typeParam ? `${url}?type=${typeParam}` : url;
      }
    });
  });
  });
// Book Now button logic for slider
document.addEventListener("DOMContentLoaded", function () {
  const bookNowButtons = document.querySelectorAll(".slider-container .book-now");
  bookNowButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      // Get the type from data-type attribute
      let type = btn.getAttribute("data-type");
      // Map slider types to booking-page types
      let typeParam = "";
      if (type === "car") typeParam = "luxury"; // or "economy" if you want economy cars
      else if (type === "bike") typeParam = "bike";
      else if (type === "bus") typeParam = "economy";
      else if (type === "plane") typeParam = "performance";
      // Redirect with type param
      window.location.href = `booking.html?type=${typeParam}`;
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("searchBtn");
  if (searchBtn) {
    searchBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const location = document.getElementById("searchLocation").value.trim();
      const pickupDate = document.getElementById("pickupDate").value;
      const returnDate = document.getElementById("returnDate").value;

      // Example: Redirect to booking.html with search parameters
      const params = new URLSearchParams({
        location,
        pickupDate,
        returnDate
      }).toString();

      window.location.href = `booking.html?${params}`;
    });
  }
});
//gallery tabx//
$(document).ready(function() {
$('#gallery').tabX({

  type:'buttons',

  animation:'none',

  animations: ["fade","slide","fall","noir","rotatez","rotatey","rotatex","blur","away","blast"],

  boxClass:'default',

  activeCat:'all',
});
});
document.addEventListener("DOMContentLoaded", function () {
  const galleryMain = document.querySelector('.gallery-main');
  if (galleryMain) galleryMain.style.display = 'none';

  // When a service card image is clicked
  document.querySelectorAll('.service-img').forEach(img => {
    img.addEventListener('click', function (e) {
      e.stopPropagation();
      if (galleryMain) galleryMain.style.display = 'flex';

      // Get the category from data-gallery attribute
      const cat = img.getAttribute('data-gallery');
      // Show the correct TabX gallery tab
      if (window.$ && $('#gallery').data('tabX')) {
        $('#gallery').tabX('show', cat);
      }
    });
  });

  // Close gallery when close button is clicked
  document.querySelectorAll('.gallery-close').forEach(btn => {
    btn.addEventListener('click', function () {
      btn.closest('.gallery-main').style.display = 'none';
    });
  });
});