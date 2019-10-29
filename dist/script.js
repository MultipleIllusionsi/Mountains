(function() {
  document.addEventListener("DOMContentLoaded", function() {
    var lazyLoadImg = [].slice.call(
      document.querySelectorAll(".lazyload")
    );

    if ("IntersectionObserver" in window) {
      let sectionsObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(({ isIntersecting, target }) => {
            if (isIntersecting) {
              target.classList.remove("lazyload");
              target.classList.add("lazyloaded");
              sectionsObserver.unobserve(target);
            }
          });
        }
      );

      lazyLoadImg.forEach(section =>
        sectionsObserver.observe(section)
      );
    } else {
      lazyLoadImg.forEach(section => {
        section.classList.remove("lazyload");
        section.classList.add("lazyloaded");
      });
    }
  });
})();
