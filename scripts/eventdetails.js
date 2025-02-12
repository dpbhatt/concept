import { data } from './data.js';

let images = [
  "https://images.placeholders.dev/?width=600&height=600",
  "https://images.placeholders.dev/?width=400&height=400",
  "https://images.placeholders.dev/?width=450&height=450",
];

let currentIndex = 0;

function showImage(index)
{
  document.getElementById("eventImage").src = images[index];
}

export function prevImage()
{
  currentIndex =
    currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  showImage(currentIndex);
}

export function nextImage()
{
  currentIndex =
    currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  showImage(currentIndex);
}

document.addEventListener("keydown", function (event)
{
  if (event.key === "ArrowLeft")
  {
    prevImage();
  } else if (event.key === "ArrowRight")
  {
    nextImage();
  }
});

function getQueryParam(param)
{
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function loadEventDetails()
{
  const eventId = getQueryParam("id");
  if (!eventId)
  {
    document.getElementById("eventTitle").textContent = "Event Not Found";
    return;
  }

  const event = data.find(e => e.id === parseInt(eventId));

  if (event)
  {
    document.getElementById("eventTitle").textContent = event.title;
    document.getElementById("eventDate").textContent = event.eventdate;
    document.getElementById("eventLocation").textContent = event.venue;
    document.getElementById("eventArtists").textContent = event.artists.join(", ");
    document.getElementById("eventDetail").textContent = event.description;
    document.getElementById("eventImage").src = event.images[0];
    images = event.images;

    document.getElementById("eventImage").alt = event.title;
  } else
  {
    document.getElementById("eventTitle").textContent = "Event Not Found!";
  }
}

document.addEventListener("DOMContentLoaded", loadEventDetails);