// Create a new IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Check if the element is intersecting (visible in the viewport)
    if (entry.isIntersecting) {
      // Add the 'fade-in' class to trigger the fade effect
      entry.target.classList.add('fade-in');
      // Optionally, unobserve the element after it's been seen
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 }); // 50% of the element needs to be visible to trigger

// Observe the #desc-1 element
observer.observe(document.getElementById('desc-1'));
