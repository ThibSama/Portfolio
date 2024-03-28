document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("navbar").classList.toggle("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menu-btn").addEventListener("click", function () {
    const navbar = document.getElementById("navbar");
    if (navbar.classList.contains("translate-x-full")) {
      navbar.classList.remove("translate-x-full");
      navbar.classList.remove("hidden");
    } else {
      navbar.classList.add("translate-x-full");
      setTimeout(() => navbar.classList.add("hidden"), 400); // Attendre la fin de la transition pour ajouter "hidden"
    }
  });
});
