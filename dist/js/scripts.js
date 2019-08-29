function parallax(element, distance) {
  const item = document.querySelector(element);
  const offset = document.querySelector(element).offsetTop;
  const height = document.querySelector(element).offsetHeight;

  if (offset < window.scrollY && window.scrollY < offset + height) {
    item.style.transform = `translateY(${distance - offset}px)`;
  }
}

window.addEventListener("scroll", function() {
  parallax(".offer", window.scrollY);
});
