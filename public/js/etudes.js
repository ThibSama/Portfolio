document.addEventListener("DOMContentLoaded", function () {
  var titleElements = document.querySelectorAll(
    "[id^='title-'], [id^='close-']"
  );

  titleElements.forEach(function (title) {
    title.addEventListener("click", function () {
      var contentId = "content-" + this.id.split("-")[1];
      var contentDiv = document.getElementById(contentId);

      if (contentDiv.classList.contains("max-h-0")) {
        contentDiv.classList.remove("max-h-0", "opacity-0");
        contentDiv.classList.add("max-h-[400px]", "opacity-100");
      } else {
        contentDiv.classList.remove("max-h-[400px]", "opacity-100");
        contentDiv.classList.add("max-h-0", "opacity-0");
      }
    });
  });
});
