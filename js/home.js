document.addEventListener("DOMContentLoaded", () => {
      const desc1 = document.getElementById('desc-1');

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Only run once
          }
        });
      }, { threshold: 0.1 });

      observer.observe(desc);
      const desc2 = document.getElementById('desc-2');

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Only run once
          }
        });
      }, { threshold: 0.1 });

      observer.observe(desc);
    });
