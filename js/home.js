document.addEventListener("DOMContentLoaded", () => {
  const elementsToObserve = ['desc-1', 'desc-2'];

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        obs.unobserve(entry.target); // Only run once per element
      }
    });
  }, { threshold: 0.1 });

  elementsToObserve.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
});
