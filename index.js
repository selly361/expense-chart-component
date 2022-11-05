import data from "./data/data.json" assert { type: "json" };
const barsContainer = document.querySelector(".bars-container");

for (let bar of data) {
  // creating the elements
  let day = document.createElement("h5");
  let barElementWrapper = document.createElement("div");
  let barElement = document.createElement("div");
  let amount = document.createElement("div");

  // setting the classnames
  day.classList.add("day-text");
  barElementWrapper.classList.add("barElementWrapper");
  barElement.classList.add("barElement");
  amount.classList.add("amount-text");

  // setting the amount element none
  amount.style.display = "none";

  // setting the text content
  day.innerText = bar.day.at(0).toUpperCase() + bar.day.slice(1);
  amount.innerText = "$" + bar.amount.toLocaleString();
  // setting its parent

  barElement.style.height = `${Math.round(2.8 * bar.amount)}px`;

  if (bar.day === "wed") {
    barElement.style.backgroundColor = "#76B5BC";
  }

  barElement.onmouseover = (e) => {
    amount.style.display = "";
  };

  barElement.onmouseleave = (e) => {
    amount.style.display = "none";
  };

  barElementWrapper.appendChild(amount);
  barElementWrapper.appendChild(barElement);
  barElementWrapper.appendChild(day);

  // rendering it

  barsContainer.appendChild(barElementWrapper);
}





