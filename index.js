/*Animation*/
document.addEventListener("DOMContentLoaded", function(event) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
  
    const hiddenElement = document.querySelector('.hidden');
    observer.observe(hiddenElement);
  });
  
  