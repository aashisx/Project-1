document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const slider = document.querySelector(".slider");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        updateSliderPosition();
    });

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        updateSliderPosition();
    });

    // Auto slide every 5 seconds
    setInterval(function () {
        nextBtn.click();
    }, 5000);

    // Book Now buttons
    document.querySelectorAll(".book-now").forEach(button => {
        button.addEventListener("click", function () {
            const type = this.dataset.type;
            document.getElementById("vehicle-type").value = type;
            document.getElementById("booking-section").scrollIntoView({ behavior: "smooth" });
        });
    });

    // Booking form submission
    document.getElementById("booking-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const vehicle = this.vehicle.value;
        const category = this.category.value;
        const price = this.price.value;

        alert(`You have booked a ${category} ${vehicle} in the ${price} range.`);
    });
});
