const init = () => {
  // method that selects the header class and toggles between the class header and sticky
  stickyNavBar = () => {
    const header = document.querySelector(".header"); // selecting class header
    header.classList.toggle("sticky", window.scrollY > 0); // toggle
  };

  // on scroll event listener
  window.addEventListener("scroll", stickyNavBar);
};

window.onload = init;
