(function (fn) {
  // see if DOM is already available
  if (
    document.readyState === 'complete' ||
    document.readyState === 'interactive'
  ) {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
})(function () {
  function animateSocialLinks() {
    var socialLinks = document.querySelectorAll('.socials__link');
    var ANIMATION_CLASS = 'socials__link--animation';

    socialLinks.forEach(function (oneLink) {
      oneLink.classList.add(ANIMATION_CLASS);
    });

  setTimeout(function () {
    var socialsBlock = document.querySelector('.socials__list');
    var socialsImage = document.querySelector('.socials__concert');
    var socialsBg = document.querySelector('.socials_bg');
    var socialsBuy = document.querySelector('.socials__buy--inner');
    if (socialsBlock && socialsImage) {
      socialsBlock.style.display = 'none';
      socialsImage.style.display = 'block';
      socialsBg.classList.add('socials_bg--blur');
    }
  }, 4000);
  }

  function intersectionCallback(target, entries, observer) {
    var isIntersectingSocialsBlock = entries[0].isIntersecting;

    if (isIntersectingSocialsBlock) {
      animateSocialLinks();
      observer.unobserve(target);
    }
  }

  function watchIntersection() {
    var socialsBlock = document.querySelector('.socials');

    var intersectionOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    var observer = new IntersectionObserver(
      // bind for future deleting observer from socialsBlock
      intersectionCallback.bind(null, socialsBlock),
      intersectionOptions
    );

    observer.observe(socialsBlock);
  }

  watchIntersection();
});
