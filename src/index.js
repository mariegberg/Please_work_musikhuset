const smallButton = document.querySelector("#small-button");
const mediumButton = document.querySelector("#medium-button");
const largeButton = document.querySelector("#large-button");

smallButton.addEventListener("click", () => {
  document.querySelector("#calendar").classList.add("hidden");
  document.querySelector("#calendarm").classList.add("hidden");
  document.querySelector("#calendarl").classList.add("hidden");
  document.querySelector("#calendars").classList.remove("hidden");
});

mediumButton.addEventListener("click", () => {
  document.querySelector("#calendar").classList.add("hidden");
  document.querySelector("#calendarm").classList.remove("hidden");
  document.querySelector("#calendarl").classList.add("hidden");
  document.querySelector("#calendars").classList.add("hidden");
});

largeButton.addEventListener("click", () => {
  document.querySelector("#calendar").classList.add("hidden");
  document.querySelector("#calendarm").classList.add("hidden");
  document.querySelector("#calendarl").classList.remove("hidden");
  document.querySelector("#calendars").classList.add("hidden");
});
