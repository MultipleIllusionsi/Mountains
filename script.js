(function() {
  document.addEventListener("DOMContentLoaded", function() {
    const lazyLoadImg = [].slice.call(document.querySelectorAll(".lazyload"));

    if ("IntersectionObserver" in window) {
      let loadImgObserver = new IntersectionObserver((entries, _observer) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (isIntersecting) {
            target.classList.remove("lazyload");
            target.classList.add("lazyloaded");
            loadImgObserver.unobserve(target);
          }
        });
      });

      lazyLoadImg.forEach(section => loadImgObserver.observe(section));
    } else {
      lazyLoadImg.forEach(section => {
        section.classList.remove("lazyload");
        section.classList.add("lazyloaded");
      });
    }
  });
})();
