document.addEventListener("DOMContentLoaded", function () {
  var currentYearElement = document.getElementById("currentYear");
  var currentYear = new Date().getFullYear();
  currentYearElement.innerHTML = currentYear;
});
