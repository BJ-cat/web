let currentIndex = 0; // Current image index in the carousel
const images = document.querySelectorAll('.carousel-image'); // Select all carousel images
const dots = document.querySelectorAll('.dot'); // Select all dots for navigation
const titles = document.querySelectorAll('.image-title'); // Select all image titles

// Function to display an image and its title at a given index
function showImage(index) {
  images.forEach(img => img.style.display = 'none'); // Hide all images
  dots.forEach(dot => dot.className = 'dot'); // Reset all dots to inactive
  titles.forEach(title => title.style.display = 'none'); // Hide all titles
  images[index].style.display = 'block'; // Display the selected image
  dots[index].className = 'dot active'; // Highlight the active dot
  titles[index].style.display = 'block'; // Display the title
}

// Function to show the next image in the carousel
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length; // Increment index and loop back to start
  showImage(currentIndex); // Show the next image
}

// Function to show the previous image in the carousel
function previousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Decrement index and loop back from start if needed
  showImage(currentIndex); // Show the previous image
}

// Event listeners for navigation arrows
document.querySelector('.right-arrow').addEventListener('click', nextImage); // Next image on right-arrow click
document.querySelector('.left-arrow').addEventListener('click', previousImage); // Previous image on left-arrow click

// Initialize the carousel by showing the first image
showImage(0);