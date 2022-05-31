const questions = document.querySelectorAll(".question");
console.log(questions);
questions.forEach((question) => {
  question.addEventListener("click", handleClick);
});

function handleClick(event) {
  questions.forEach((question) => {
    if (
      question !== this &&
      question.parentNode.classList.contains("show-answer")
    )
      question.parentNode.classList.toggle("show-answer");
    if (question === this) this.parentNode.classList.toggle("show-answer");
  });
}
