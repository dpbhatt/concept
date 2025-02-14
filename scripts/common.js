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
        <p>&copy; 2013 - <span id="current-year"></span> Nepal Music Festival, Denmark. CVR: 34777306. All rights reserved.</p>
        <div class="social-icons">
          <a href="https://www.facebook.com/nmfdenmark" target="_blank" class="fab fa-facebook"></a>
          <a href="https://www.linkedin.com" target="_blank" class="fab fa-linkedin"></a>
          <a href="https://twitter.com" target="_blank" class="fab fa-twitter"></a>
        </div>
      </footer>
    `;

    document.getElementById("current-year").innerText = new Date().getFullYear();
});