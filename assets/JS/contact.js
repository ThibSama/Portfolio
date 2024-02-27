document.addEventListener("DOMContentLoaded", function () {
  var messageField = document.getElementById("message");
  var characterCount = document.getElementById("characterCount");

  messageField.addEventListener("input", function () {
    var currentLength = messageField.value.length;
    characterCount.textContent = currentLength;
    if (currentLength > 2048) {
      messageField.value = messageField.value.substring(0, 1024);
      alert("La limite de 2048 caractères a été atteinte.");
    }
  });
});
