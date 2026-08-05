document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("lightboxModal");
    const modalImg = document.getElementById("lightboxImage");
    const captionText = document.getElementById("caption");
    const closeButton = document.querySelector(".modal .close");
    const prevButton = document.querySelector(".modal .prev");
    const nextButton = document.querySelector(".modal .next");
    const galleryImages = Array.from(document.querySelectorAll(".gallery-img"));
    let currentIndex = 0;

    function showSlide(index) {
        const image = galleryImages[index];
        currentIndex = index;
        modalImg.src = image.dataset.large;
        captionText.textContent = image.alt;
        modal.style.display = "block";
    }

    galleryImages.forEach((image, index) => {
        image.addEventListener("click", function () {
            showSlide(index);
        });
    });

    function plusSlides(step) {
        const nextIndex = (currentIndex + step + galleryImages.length) % galleryImages.length;
        showSlide(nextIndex);
    }

    prevButton.addEventListener("click", function () {
        plusSlides(-1);
    });

    nextButton.addEventListener("click", function () {
        plusSlides(1);
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
        if (event.key === "ArrowLeft") {
            plusSlides(-1);
        }
        if (event.key === "ArrowRight") {
            plusSlides(1);
        }
    });
});
