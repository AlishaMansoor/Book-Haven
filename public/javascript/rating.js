const stars = document.querySelectorAll("#star-rating i");
      const ratingInput = document.getElementById("rating-value");

      stars.forEach(a => {
        a.addEventListener("click", function() {
          const rating = this.getAttribute("data-value");
          ratingInput.value = rating;

          // Reset all stars
          stars.forEach(s => s.classList.remove("fa-solid"));
          stars.forEach(s => s.classList.add("fa-regular"));

          // Fill stars up to clicked one
          for (let i = 0; i < rating; i++) {
            stars[i].classList.remove("fa-regular");
            stars[i].classList.add("fa-solid");
          }
        });
      }); 