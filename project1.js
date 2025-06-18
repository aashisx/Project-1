jQuery(document).ready(function ($) {
    $('#datepicker').datepicker();
});



document.addEventListener("DOMContentLoaded", function () {
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card) => {
    card.addEventListener("click", function () {
      const url = card.dataset.url;
      // Get the type from the card content (e.g., Cars, Bikes, Taxi, Planes)
      const typeText = card.querySelector('.card_content h3')?.textContent?.toLowerCase();
      let typeParam = '';
      if (typeText) {
        if (typeText.includes('car')) typeParam = 'luxury'; // or 'economy' if you want both
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
            item.classList.add("hidden"); // Shrink other items
            item.classList.remove("expanded"); // Ensure they are not expanded
          } else {
            item.classList.remove("hidden"); // Remove hidden class
            item.classList.add("expanded"); // Expand the current item
          }
        });
      } else {
        allItems.forEach((item) => {
          item.classList.remove("hidden", "expanded"); // Reset all cards
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

  $('.book-now').click(function () {
    const vehicleType = $(this).data('type');
    alert('Redirecting to booking section for: ' + vehicleType);
    // Optionally: window.location.href = "#booking-section";
  });
});