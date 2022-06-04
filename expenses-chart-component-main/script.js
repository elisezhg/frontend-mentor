const chart = document.querySelector(".chart");

const day = new Date().getDay() - 1;

let max = 0;

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    max = data.reduce(
      (prev, elem) => (prev = elem.amount > prev ? elem.amount : prev),
      0
    );
    data.forEach((element) => {
      const div = document.createElement("div");
      const p = document.createElement("p");
      p.append(element.day);

      // Add tooltip
      const tooltip = document.createElement("div");
      tooltip.classList.add("tooltip");
      tooltip.append(`$${element.amount}`);

      // Compute height
      const bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = `${(element.amount / max) * 150}px`;

      // Highlight if today
      if (element === data[day]) {
        bar.classList.add("cyan");
      }

      div.append(tooltip)
      div.append(bar);
      div.append(p);
      document.querySelector(".chart").append(div);
    });
  });

document.addEventListener("touchstart", () => {
  this.classList.add("active");
})