window.addEventListener("scroll", function () {
  if (this.window.scrollY > 80) {
    this.document.querySelector(".navbar").classList.add("navbar-flotante");
  } else {
    this.document.querySelector(".navbar").classList.remove("navbar-flotante");
  }
});
