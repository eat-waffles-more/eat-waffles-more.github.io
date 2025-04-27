document.addEventListener("DOMContentLoaded", () => {
      const desc = document.getElementById('desc-1');

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
