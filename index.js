window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  // Add or remove 'active' class based on the scroll position
  document.querySelectorAll("section").forEach(function (section, index) {
    var offsetTop = section.offsetTop;
    var offsetBottom = offsetTop + section.offsetHeight;

    var navLinks = document.querySelectorAll("nav a");

    // if (scrollPosition >= offsetTop  && scrollPosition < offsetBottom) {
    if (
      scrollPosition >= offsetTop - 150 &&
      scrollPosition < offsetBottom - 150
    ) {
      navLinks[index].classList.add("active");
    } else {
      navLinks[index].classList.remove("active");
    }
  });
});

let closeBtn = document.querySelector("#close-menu-btn");
let menuBtn = document.querySelector("#menu-btn");
let navBar = document.querySelector(".nav-container");
let options = document.querySelectorAll(".options");
let menuChecked = false;

options.forEach((option) => {
  option.addEventListener("mouseenter", () => {
    option.lastElementChild.classList.toggle("hidden");
  });
  option.addEventListener("mouseleave", () => {
    option.lastElementChild.classList.toggle("hidden");
  });

  option.addEventListener("click", function () {
    option.style.translate = "-80px -100px";
    setTimeout(() => {
      option.style.translate = "-80px 0";
    }, 300);
  });
});

menuBtn.addEventListener("click", menu);
function menu() {
  menuChecked = !menuChecked;
  if (menuChecked) {
    let i = 0.1;
    options.forEach((event) => {
      event.style.opacity = "1";
      event.style.translate = "-80px 0";
      event.style.visibility = "visible";
      event.style.transitionDelay = `0s, 0s, 0s, ${i}s,${i}s,${i}s`;
      i += 0.1;
    });
    menuBtn.firstElementChild.removeAttribute("class", "fa-solid fa-bars");
    menuBtn.firstElementChild.setAttribute("class", "fa-solid fa-xmark");
  } else {
    let i = 0.5;
    options.forEach((event) => {
      event.style.opacity = "0";
      event.style.translate = "0";
      event.style.visibility = "hidden";
      event.style.transitionDelay = `0s, 0s, 0s, ${i}s,${i}s,${i}s`;
      i -= 0.1;
    });

    menuBtn.firstElementChild.removeAttribute("class", "fa-solid fa-xmark");
    menuBtn.firstElementChild.setAttribute("class", "fa-solid fa-bars");
  }
}
