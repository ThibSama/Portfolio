console.log("bite veille");
document.addEventListener("DOMContentLoaded", function () {
  var veilleTopics = document.querySelectorAll(".veille-topic");

  veilleTopics.forEach(function (topic) {
    topic.addEventListener("click", function () {
      var contentId = "content-" + this.id.split("-")[1];
      var contentDiv = document.getElementById(contentId);

      if (contentDiv.classList.contains("opacity-0")) {
        contentDiv.classList.remove("opacity-0", "max-h-0");
        contentDiv.classList.add("opacity-100", "max-h-screen");
      } else {
        contentDiv.classList.remove("opacity-100", "max-h-screen");
        contentDiv.classList.add("opacity-0", "max-h-0");
      }
    });
  });
});
