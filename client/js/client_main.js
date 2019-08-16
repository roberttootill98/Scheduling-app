// main client
'use strict'

// dummy data, represents data from back end
const data = [
  {
    "monthYear": "01/19",
    "name": "January",
    "days":
    [
      {
        "activities": ["one thing", "then another"]
      },
      {
        "title": "my man",
        "activities": ["last thing"]
      },
    ]
  },
  {
    "monthYear": "02/19",
    "name": "February",
    "days":
    [
      {
        "activities": ["one thing", "then another"]
      },
      {
        "activities": ["last thing"]
      },
    ]
  }
]

async function boot() {
  displayMonth(data[0]);
}

function displayMonth(month) {
  // display all month data
  displayDays(month.days, month.monthYear);
}

function displayDays(days, monthYear) {
  // display days data
  const container = document.getElementById("dayContainer");

  let date = 1; // first of month

  for(let i in days) {
    const day = days[i];

    const li = document.createElement("li");

    const titleBox = document.createElement("p");
    const title = document.createElement("h2");
    const displayDate = document.createElement("h2");

    if("title" in day) {
      title.textContent = day.title;
    }

    displayDate.textContent = `${date}/${monthYear}`;
    date++;

    // add meta data to html elements
    li.classList.add("day");
    titleBox.classList.add("titleBox");

    // add html elements to page
    container.appendChild(li);

    li.appendChild(titleBox);
    titleBox.appendChild(title);
    titleBox.appendChild(displayDate);


    // create activities as sub items
    for(let j in day.activities) {
      let activity = day.activities[j];

      const title = document.createElement("p");
      title.textContent = activity;

      li.appendChild(title);
    }
  }
}

window.addEventListener("load", boot);
