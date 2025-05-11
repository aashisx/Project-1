jQuery(document).ready(function ($) {
    $('#datepicker').datepicker();
});



document.addEventListener("DOMContentLoaded", function () {
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card) => {
    card.addEventListener("click", function () {
      const url = card.dataset.url;
      if (url) {
        window.location.href = url;
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