import { data } from './data.js';

const images = [
    "https://images.placeholders.dev/?width=600&height=600",
    "https://images.placeholders.dev/?width=400&height=400",
    "https://images.placeholders.dev/?width=450&height=450",
  ];

  let currentIndex = 0;

  function showImage(index) {
    document.getElementById("eventImage").src = images[index];
  }

  export function prevImage() {
    currentIndex =
      currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
  }

  export function nextImage() {
    currentIndex =
      currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    showImage(currentIndex);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      prevImage();
    } else if (event.key === "ArrowRight") {
      nextImage();
    }
  });