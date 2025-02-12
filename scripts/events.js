const data = [
    {
        id: 1,
        title: "Event 1",
        eventdate: "2025-03-01",
        image: "https://via.placeholder.com/50",
        venue: "Grand Arena, NY",
        artists: ["Artist A", "Artist B", "Artist C"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero id felis dapibus, sed tincidunt elit venenatis. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 2,
        title: "Event 2",
        eventdate: "2025-04-10",
        image: "https://via.placeholder.com/50",
        venue: "City Concert Hall, LA",
        artists: ["Band X", "Singer Y"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 3,
        title: "Event 3",
        eventdate: "2025-05-21",
        image: "https://via.placeholder.com/50",
        venue: "Open Air Park, SF",
        artists: ["DJ Alpha", "Rapstar Z"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero id felis dapibus, sed tincidunt elit venenatis. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 4,
        title: "Event 4",
        eventdate: "2025-06-30",
        image: "https://via.placeholder.com/50",
        venue: "Sunset Pavilion, Miami",
        artists: ["Rock Band L", "Guitarist Q"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 5,
        title: "Event 5",
        eventdate: "2025-03-01",
        image: "https://via.placeholder.com/50",
        venue: "Grand Arena, NY",
        artists: ["Artist A", "Artist B", "Artist C"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero id felis dapibus, sed tincidunt elit venenatis. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 6,
        title: "Event 6",
        eventdate: "2025-05-21",
        image: "https://via.placeholder.com/50",
        venue: "Open Air Park, SF",
        artists: ["DJ Alpha", "Rapstar Z"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero id felis dapibus, sed tincidunt elit venenatis. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 7,
        title: "Event 7",
        eventdate: "2025-06-30",
        image: "https://via.placeholder.com/50",
        venue: "Sunset Pavilion, Miami",
        artists: ["Rock Band L", "Guitarist Q"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 8,
        title: "Event 8",
        eventdate: "2025-03-01",
        image: "https://via.placeholder.com/50",
        venue: "Grand Arena, NY",
        artists: ["Artist A", "Artist B", "Artist C"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero id felis dapibus, sed tincidunt elit venenatis. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 9,
        title: "Event 9",
        eventdate: "2025-04-10",
        image: "https://via.placeholder.com/50",
        venue: "City Concert Hall, LA",
        artists: ["Band X", "Singer Y"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 10,
        title: "Event 10",
        eventdate: "2025-05-21",
        image: "https://via.placeholder.com/50",
        venue: "Open Air Park, SF",
        artists: ["DJ Alpha", "Rapstar Z"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero id felis dapibus, sed tincidunt elit venenatis. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 11,
        title: "Event 11",
        eventdate: "2025-06-30",
        image: "https://via.placeholder.com/50",
        venue: "Sunset Pavilion, Miami",
        artists: ["Rock Band L", "Guitarist Q"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 12,
        title: "Event 12",
        eventdate: "2025-03-01",
        image: "https://via.placeholder.com/50",
        venue: "Grand Arena, NY",
        artists: ["Artist A", "Artist B", "Artist C"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero id felis dapibus, sed tincidunt elit venenatis. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 13,
        title: "Event 13",
        eventdate: "2025-04-10",
        image: "https://via.placeholder.com/50",
        venue: "City Concert Hall, LA",
        artists: ["Band X", "Singer Y"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 14,
        title: "Event 14",
        eventdate: "2025-05-21",
        image: "https://via.placeholder.com/50",
        venue: "Open Air Park, SF",
        artists: ["DJ Alpha", "Rapstar Z"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero id felis dapibus, sed tincidunt elit venenatis. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 15,
        title: "Event 15",
        eventdate: "2025-06-30",
        image: "https://via.placeholder.com/50",
        venue: "Sunset Pavilion, Miami",
        artists: ["Rock Band L", "Guitarist Q"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 16,
        title: "Event 16",
        eventdate: "2025-03-01",
        image: "https://via.placeholder.com/50",
        venue: "Grand Arena, NY",
        artists: ["Artist A", "Artist B", "Artist C"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero id felis dapibus, sed tincidunt elit venenatis. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 17,
        title: "Event 17",
        eventdate: "2025-04-10",
        image: "https://via.placeholder.com/50",
        venue: "City Concert Hall, LA",
        artists: ["Band X", "Singer Y"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 18,
        title: "Event 18",
        eventdate: "2025-05-21",
        image: "https://via.placeholder.com/50",
        venue: "Open Air Park, SF",
        artists: ["DJ Alpha", "Rapstar Z"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero id felis dapibus, sed tincidunt elit venenatis. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 19,
        title: "Event 19",
        eventdate: "2025-06-30",
        image: "https://via.placeholder.com/50",
        venue: "Sunset Pavilion, Miami",
        artists: ["Rock Band L", "Guitarist Q"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 20,
        title: "Event 20",
        eventdate: "2025-03-01",
        image: "https://via.placeholder.com/50",
        venue: "Grand Arena, NY",
        artists: ["Artist A", "Artist B", "Artist C"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero id felis dapibus, sed tincidunt elit venenatis. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 21,
        title: "Event 21",
        eventdate: "2025-04-10",
        image: "https://via.placeholder.com/50",
        venue: "City Concert Hall, LA",
        artists: ["Band X", "Singer Y"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 22,
        title: "Event 22",
        eventdate: "2025-04-10",
        image: "https://via.placeholder.com/50",
        venue: "City Concert Hall, LA",
        artists: ["Band X", "Singer Y"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 23,
        title: "Event 23",
        eventdate: "2025-05-21",
        image: "https://via.placeholder.com/50",
        venue: "Open Air Park, SF",
        artists: ["DJ Alpha", "Rapstar Z"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt libero id felis dapibus, sed tincidunt elit venenatis. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    },
    {
        id: 24,
        title: "Event 24",
        eventdate: "2025-06-30",
        image: "https://via.placeholder.com/50",
        venue: "Sunset Pavilion, Miami",
        artists: ["Rock Band L", "Guitarist Q"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Proin a nulla nec elit aliquet venenatis a sit amet nulla. Nullam euismod, lorem eu tincidunt vestibulum, magna ex rhoncus dolor, id bibendum nunc justo eget urna. Sed dictum vestibulum nulla, a eleifend urna tincidunt vel. Duis ultricies metus sit amet sem sagittis, at aliquam magna hendrerit. Morbi malesuada arcu non libero accumsan, a feugiat risus lacinia. Curabitur convallis lacus ut turpis efficitur, at elementum velit venenatis. Nam euismod, felis in suscipit hendrerit, justo tortor sollicitudin odio, ut fermentum mi urna eu libero. Nulla facilisi. Donec efficitur feugiat erat, eget facilisis lorem maximus vel."
    }
];

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
                  <td class="p-3"><a href="/eventdetail.html?id= ${item.id}">Details</a></td>
              `;
            tableBody.appendChild(row);
        });
    }
}

function renderPagination(filteredData)
{
    const pagination = document.getElementById("pagination");
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++)
    {
        if (totalPages > 1)
        {
            const pageItem = document.createElement("li");
            pageItem.classList.add("page-item");
            pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            pageItem.addEventListener("click", function (event)
            {
                event.preventDefault();
                currentPage = i;
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