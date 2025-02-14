document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img src="images/nmflogo.jpg" alt="Nepal Music Festival Logo" height="40">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="events.html">Events</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  `;

  document.getElementById("header-placeholder").innerHTML = headerHTML;
});

document.addEventListener("DOMContentLoaded", function ()
{
    // Get current page URL
    const currentPage = window.location.pathname.split("/").pop();

    // Select all nav links
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Loop through each link and check if it matches the current page
    navLinks.forEach(link =>
    {
        if (link.getAttribute("href") === currentPage)
        {
            link.classList.add("active");
        } else
        {
            link.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function ()
{
    document.getElementById("footer-placeholder").innerHTML = `
      <footer class="bg-dark text-white text-center py-3">
        <p>&copy; 2013 - <span id="current-year"></span> Nepal Music Festival Denmark. CVR: 34777306. All rights reserved.</p>
        <div class="social-icons">
          <a href="https://www.facebook.com/nmfdenmark" target="_blank" class="fab fa-facebook"></a>
          <a href="https://www.linkedin.com" target="_blank" class="fab fa-linkedin"></a>
          <a href="https://twitter.com" target="_blank" class="fab fa-twitter"></a>
        </div>
      </footer>
    `;

    document.getElementById("current-year").innerText = new Date().getFullYear();
});