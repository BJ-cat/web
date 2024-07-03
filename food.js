let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const dots = document.querySelectorAll('.dot');
const titles = document.querySelectorAll('.image-title');

function showImage(index) {
  images.forEach(img => img.style.display = 'none');
  dots.forEach(dot => dot.className = 'dot');
  titles.forEach(title => title.style.display = 'none');
  images[index].style.display = 'block';
  dots[index].className = 'dot active';
  titles[index].style.display = 'block';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function previousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

document.querySelector('.right-arrow').addEventListener('click', nextImage);
document.querySelector('.left-arrow').addEventListener('click', previousImage);

showImage(0);