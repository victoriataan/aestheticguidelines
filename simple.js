let slideIndex = 1;
showSlides(slideIndex);

// Function to go to the next or previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to display the current slide
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  // Loop back to the first slide if at the end
  if (n > slides.length) {
    slideIndex = 1;
  }

  // Go to the last slide if at the beginning
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the current slide
  slides[slideIndex - 1].style.display = "block";
}
