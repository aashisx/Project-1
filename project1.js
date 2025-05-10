jQuery(document).ready(function ($) {
    $('#datepicker').datepicker();
});
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".expand-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const currentItem = btn.closest(".service-card");
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




