import { data } from './data.js';

let currentPage = 1;
const rowsPerPage = 20;

function renderTable(filteredData)
{
    const tableBody = document.getElementById("tableBody");
    const noResultsMessage = document.getElementById("noResultsMessage");
    tableBody.innerHTML = "";

    if (filteredData.length === 0)
    {
        noResultsMessage.style.display = "block";
    } else
    {
        noResultsMessage.style.display = "none";

        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        const paginatedData = filteredData.slice(startIndex, endIndex);

        paginatedData.forEach((item) =>
        {
            const row = document.createElement("tr");
            row.classList.add("p-3");
            row.innerHTML = `
                <td class="p-3">${item.eventdate}</td>
                <td class="p-3">${item.title}</td>                
                <td class="p-3">${item.venue}</td>                  
                <td class="p-3"><a href="eventdetail.html?id=${item.id}">Details</a></td>
            `;
            tableBody.appendChild(row);
        });

        // Reapply data-labels after rendering the table
        applyDataLabels();
    }
}


function renderPagination(filteredData) {
    const pagination = document.getElementById("pagination");
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        if (totalPages > 1) {
            const pageItem = document.createElement("li");
            pageItem.classList.add("page-item");

            // Add active class if this is the current page
            if (i === currentPage) {
                pageItem.classList.add("active");
            }

            pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            pageItem.addEventListener("click", function (event) {
                event.preventDefault();
                currentPage = i;

                // Re-render table and pagination with updated currentPage
                renderTable(filteredData);
                renderPagination(filteredData);
            });

            pagination.appendChild(pageItem);
        }
    }
}

function filterData()
{
    const searchValue = document
        .getElementById("searchInput")
        .value.toLowerCase();
    const filteredData = data.filter(
        (item) =>
            item.title.toLowerCase().includes(searchValue) ||
            item.description.toLowerCase().includes(searchValue)
    );
    renderTable(filteredData);
    renderPagination(filteredData);
}

renderTable(data);
renderPagination(data);

document
    .getElementById("searchInput")
    .addEventListener("input", filterData);


function applyDataLabels()
{
    document.querySelectorAll("#tableBody tr").forEach((row) =>
    {
        row.querySelectorAll("td").forEach((cell, index) =>
        {
            const headers = ["Date", "Title", "Venue", "Details"];
            if (headers[index] !== "Details")
            {
                cell.setAttribute("data-label", headers[index]); // Add label only if not "Details"
            }
        });
    });
}