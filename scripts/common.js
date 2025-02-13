document.addEventListener("DOMContentLoaded", () =>
{
    document.getElementById("current-year").textContent =
    new Date().getFullYear();
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