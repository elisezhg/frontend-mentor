const adviceId = document.querySelector(".advice-id");
const advice = document.querySelector(".advice");
const dice = document.querySelector(".dice");

const fetchAdvice = () => {
  if (!dice.classList.contains("disabled")) {
    dice.classList.add("disabled");

    axios.get("https://api.adviceslip.com/advice").then((res) => {
      adviceId.textContent = res.data.slip.id;
      advice.textContent = `"${res.data.slip.advice}"`;

      dice.classList.remove("disabled");
    });
  }
};

fetchAdvice();

dice.addEventListener("click", fetchAdvice);
