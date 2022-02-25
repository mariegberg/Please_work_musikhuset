const lokalerSmallButton = document.querySelector("#lille-lokal-button");
const closeCalendar = document.querySelector("#smallexit");
const lokalerMediumButton = document.querySelector("#mellem-lokal-button");
const closeCalendar2 = document.querySelector("#mediumexit");
const lokalerLargeButton = document.querySelector("#store-lokal-button");
const closeCalendar3 = document.querySelector("#largeexit");

lokalerSmallButton.addEventListener("click", () => {
  document.querySelector("#lille-lokal-button").classList.toggle("hidden");
  document.querySelector("#smallexit").classList.toggle("hidden");
});

closeCalendar.addEventListener("click", () => {
  document.querySelector("#lille-lokal-button").classList.toggle("hidden");
  document.querySelector("#smallexit").classList.toggle("hidden");
});

lokalerMediumButton.addEventListener("click", () => {
  document.querySelector("#mellem-lokal-button").classList.toggle("hidden");
  document.querySelector("#mediumexit").classList.toggle("hidden");
});

closeCalendar2.addEventListener("click", () => {
  document.querySelector("#mellem-lokal-button").classList.toggle("hidden");
  document.querySelector("#mediumexit").classList.toggle("hidden");
});

lokalerLargeButton.addEventListener("click", () => {
  document.querySelector("#store-lokal-button").classList.toggle("hidden");
  document.querySelector("#largeexit").classList.toggle("hidden");
});

closeCalendar3.addEventListener("click", () => {
  document.querySelector("#store-lokal-button").classList.toggle("hidden");
  document.querySelector("#largeexit").classList.toggle("hidden");
});
