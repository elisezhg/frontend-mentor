const inputs = document.querySelectorAll("input");

const billInput = document.querySelector("#bill");
const percentageInputs = document.querySelectorAll('input[name="percentage"]');
const customPercentageInput = document.getElementById("custom");
const nbPeopleInput = document.querySelector("#nb-people");

const resetBtn = document.getElementById("reset");

const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");

let bill;
let tipPercentage;
let nbPeople;

let isError;

// Keep track of input values
const handleCustomInput = (e) => {
  tipPercentage = e.target.value / 100;
  percentageInputs.forEach((input) => (input.checked = false));
};

const handlePercentageInputs = (e) => {
  tipPercentage = e.target.value / 100;
  customPercentageInput.value = null;
};

billInput.addEventListener("change", (e) => (bill = e.target.value));
nbPeopleInput.addEventListener("change", (e) => (nbPeople = e.target.value));
customPercentageInput.addEventListener("change", handleCustomInput);
percentageInputs.forEach((input) =>
  input.addEventListener("change", handlePercentageInputs)
);

// Validate inputs
const validate = (e) => {
  resetBtn.disabled = false;
  const target = e.target;

  isError = true;

  if (isNaN(target.value)) {
    target.parentNode.parentNode.classList.add("error");
    target.parentNode.previousElementSibling.textContent = "Can't be NaN";
  } else if (target.id === "nb-people" && target.value == 0) {
    target.parentNode.parentNode.classList.add("error");
    target.parentNode.previousElementSibling.textContent = "Can't be zero";
  } else if (target.value < 0) {
    target.parentNode.parentNode.classList.add("error");
    target.parentNode.previousElementSibling.textContent = "Can't be negative";
  } else {
    isError = false;
    target.parentNode.parentNode.classList.remove("error");
  }

  if (bill && tipPercentage && nbPeople && !isError) computeAmounts();
};

inputs.forEach((input) => input.addEventListener("change", validate));

// Compute amounts
const computeAmounts = () => {
  const tip = round((bill * tipPercentage) / nbPeople);
  const total = round(bill / nbPeople + tip);
  tipAmount.textContent = `$${tip}`;
  totalAmount.textContent = `$${total}`;
};

const round = (n) => {
  return Math.round(n * 100) / 100;
};

// Reset
const handleReset = () => {
  isError = false;
  resetBtn.disabled = true;
  inputs.forEach((input) => {
    input.parentNode.parentNode.classList.remove("error");
    input.checked = false;
  });
};

resetBtn.addEventListener("click", handleReset);
