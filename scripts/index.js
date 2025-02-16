import { data } from './data.js';

const featuredEvents = data.filter(event => event.isFeatured);

function loadEvents(count)
{
    const container = document.getElementById("featured-events");
    container.innerHTML = "";

    if (featuredEvents.length === 0)
    {
        container.innerHTML = `<div class="alert alert-info">No featured events found!</div>`;
        document.getElementById("show-more-events").style.display = "none";
        return;
    }
    if (featuredEvents.length <= 6)
    {
        document.getElementById("show-more-events").style.display = "none";
    }

    for (let i = 0; i < count; i++)
    {
        if (featuredEvents[i])
        {
            container.innerHTML += `
                          <div class="col-md-4">
                              <div class="card">
                                  <img src="${featuredEvents[i].images[0]}" class="card-img-top" alt="Event Image">
                                  <div class="card-body text-center">
                                      <p class="card-title fs-5">${featuredEvents[i].title}</p>
                                      <p class="card-text fs-6">${featuredEvents[i].eventdate}</p>
                                      <p class="card-text fs-6">${featuredEvents[i].venue}</p>
                                      <a class="float-end fs-6" href="eventdetail.html?id=${featuredEvents[i].id}" class="link-info">Details</a>
                                  </div>
                              </div>
                          </div>
                      `;
        }
    }
}

loadEvents(featuredEvents.length > 6 ? 6 : featuredEvents.length);

document
    .getElementById("show-more-events")
    .addEventListener("click", function ()
    {
        loadEvents(featuredEvents.length);
        this.style.display = "none";
    });