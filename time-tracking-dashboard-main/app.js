// Get parent elements from DOM
const buttons = document.querySelectorAll("button");
const cardBottomSection = document.querySelectorAll(".card-bottom-section");

let activeButton = null;

// helper functions - start

const getData = async function () {
  // fetch timeframe data from JSON array
  try {
    const response = await fetch("./data.json");
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Response Error...");
    }
  } catch (error) {
    console.error({ message: error.message });
  }
};

const renderData = function (data, timeframe) {
  for (let i = 0; i <= data.length - 1; i++) {
    // retrieves daily data from JSON objects.
    const dailyData = data[i]["timeframes"][timeframe];
    let currentData = dailyData["current"];
    let previousData = dailyData["previous"];

    // retrieves child elements from bottom card section.
    let current = cardBottomSection[i].children[0];
    let previous = cardBottomSection[i].children[1];

    // renders JSON data into child elements
    current.innerText = `${currentData}hrs`;
    previous.innerText = `Last Week - ${previousData}hrs`;
  }
};

const getDailyData = function (data) {
  // call renderData to iterate through data by daily timeframe
  renderData(data, "daily");
};

const getWeeklyData = function (data) {
  // call renderData to iterate through data by weekly timeframe
  renderData(data, "weekly");
};

const getMonthlyData = function (data) {
  // call renderData to iterate through data by monthly timeframe
  renderData(data, "monthly");
};

// helper functions - end

// button event listener - start

buttons.forEach(function (button) {
  button.addEventListener("click", async function (evt) {
    evt.preventDefault();
    evt.currentTarget.classList.add("active");

    if (activeButton !== null && activeButton !== evt.currentTarget) {
      activeButton.classList.remove("active");
    }

    activeButton = evt.currentTarget;

    // retrieve data from async function 
    const data = await getData();
    switch (button.innerText) {
      case "Daily":
        getDailyData(data);
        break;
      case "Weekly":
        getWeeklyData(data);
        break;
      case "Monthly":
        getMonthlyData(data);
        break;
    }
  });
});

// button event listener - end