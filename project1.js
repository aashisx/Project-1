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
            item.classList.add("hidden"); // Hide other items
          } else {
            item.classList.add("expanded"); // Expand the current item
            item.querySelector(".card").classList.add("expanded"); // Show expanded content
          }
        });
      } else {
        allItems.forEach((item) => {
          item.classList.remove("hidden", "expanded");
          item.querySelector(".card").classList.remove("expanded");
        });
      }
    });
  });
});




