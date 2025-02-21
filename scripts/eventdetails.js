import { data } from './data.js';

let images = [
  "https://images.placeholders.dev/?width=600&height=600",
  "https://images.placeholders.dev/?width=400&height=400",
  "https://images.placeholders.dev/?width=450&height=450",
];

let currentIndex = 0;

function showImage(index) {
  document.getElementById("eventImage").src = images[index];
}

export function prevImage() {
  currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  showImage(currentIndex);
}

export function nextImage() {
  currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  showImage(currentIndex);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    prevImage();
  } else if (event.key === "ArrowRight") {
    nextImage();
  }
});

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Function to create iframe for Facebook videos (Watch & Reels)
function createFacebookIframe(videoUrl) {
  let videoId;

  // Check if URL is a Facebook Watch video
  if (videoUrl.includes("facebook.com/watch")) {
    const match = videoUrl.match(/v=(\d+)/);
    if (match) videoId = match[1];
  }
  // Check if URL is a Facebook Reel
  else if (videoUrl.includes("facebook.com/reel/")) {
    const match = videoUrl.match(/\/reel\/(\d+)/);
    if (match) videoId = match[1];
  }

  if (!videoId) return null;

  return `<iframe 
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/video.php?v=${videoId}&show_text=false"
            width="100%" height="315" 
            style="border:none;overflow:hidden; max-width: 560px;" 
            scrolling="no" frameborder="0" allowfullscreen="true">
          </iframe>`;
}

// Load all videos from event data
function loadEventVideos(event) {
  const videoContainer = document.getElementById("eventVideoContainer");
  videoContainer.innerHTML = ""; // Clear existing videos

  if (!event.videos || event.videos.length === 0) return;

  event.videos.forEach(videoUrl => {
    const iframeHtml = createFacebookIframe(videoUrl);
    if (iframeHtml) {
      const div = document.createElement("div");
      div.classList.add("video-wrapper");
      div.innerHTML = iframeHtml;
      videoContainer.appendChild(div);
    }
  });

  videoContainer.style.display = "block"; // Show video section
}

function loadEventDetails() {
  const eventId = getQueryParam("id");
  if (!eventId) {
    document.getElementById("eventTitle").textContent = "Event Not Found";
    return;
  }

  const event = data.find(e => e.id === parseInt(eventId));

  if (event) {
    document.getElementById("eventTitle").textContent = event.title;
    document.getElementById("eventDate").textContent = event.eventdate;
    document.getElementById("eventLocation").textContent = event.venue;
    document.getElementById("eventArtists").textContent = event.artists.join(", ");
    document.getElementById("eventDetail").textContent = event.description;
    document.getElementById("eventImage").src = event.images[0];
    images = event.images;
    document.getElementById("eventImage").alt = event.title;

    // Load Videos
    loadEventVideos(event);
  } else {
    document.getElementById("eventTitle").textContent = "Event Not Found!";
  }
}

document.addEventListener("DOMContentLoaded", loadEventDetails);

// Initialize the current image index
let currentImageIndex = 0;

function changeEventImage() {
  const eventImageElement = document.getElementById("eventImage");  
  eventImageElement.src = images[currentImageIndex];  
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Change image every 10 seconds
setInterval(changeEventImage, 10000);

changeEventImage();