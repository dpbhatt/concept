import { data } from './data.js';

let images = [];
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

// Keyboard navigation for image gallery
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
    
    // Load event images
    if (event.images && event.images.length > 0) {
      images = event.images;
      document.getElementById("eventImage").src = images[0];
      document.getElementById("eventImage").alt = event.title;
    } else {
      document.getElementById("eventImage").src = "https://via.placeholder.com/500x300?text=No+Image";
    }

    // Load event videos
    const videoContainer = document.getElementById("eventVideoContainer");
    videoContainer.innerHTML = ""; // Clear previous content

    if (event.videos && event.videos.length > 0) {
      videoContainer.style.display = "block"; // Show video section

      event.videos.forEach(videoUrl => {
        const iframe = document.createElement("iframe");
        iframe.src = videoUrl.replace("facebook.com/reel/", "facebook.com/plugins/video.php?href=https://www.facebook.com/reel/");
        iframe.width = "68%";
        iframe.height = "350";
        iframe.style.border = "none";
        iframe.style.overflow = "hidden";
        iframe.allow = "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share";
        iframe.allowFullscreen = true;

        const videoWrapper = document.createElement("div");
        videoWrapper.classList.add("video-wrapper");
        videoWrapper.appendChild(iframe);

        videoContainer.appendChild(videoWrapper);
      });
    } else {
      videoContainer.style.display = "none"; // Hide if no videos available
    }
  } else {
    document.getElementById("eventTitle").textContent = "Event Not Found!";
  }
}

document.addEventListener("DOMContentLoaded", loadEventDetails);
