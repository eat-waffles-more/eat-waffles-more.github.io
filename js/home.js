function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom > 0
    );
  }

  function handleFadeIn(entry) {
    entry.classList.add('fade-in');
  }

  document.addEventListener("DOMContentLoaded", () => {
    const desc1 = document.getElementById('desc-1');

    // Manual check on load
    if (isInViewport(desc1)) {
      handleFadeIn(desc1);
    } else {
      // Use IntersectionObserver for scroll into view
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            handleFadeIn(entry.target);
            observer.unobserve(entry.target); // Only trigger once
          }
        });
      }, { threshold: 0.5 });

      observer.observe(desc1);
    }
  });
