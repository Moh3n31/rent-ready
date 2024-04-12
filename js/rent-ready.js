let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    document.getElementById("header").classList.add("hidden");
  }
  else {
    // Scrolling up
    document.getElementById("header").classList.remove("hidden");
    document.getElementById("header").style.backgroundColor = "rgba(16,30,59,255)";
  }

  if (currentScroll === 0) {
    document.getElementById("header").style.backgroundColor = "transparent";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});