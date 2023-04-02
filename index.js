function showGhost() {
    var ghost = document.getElementById("ghost");
    
    // Generate random position for ghost
    var maxX = window.innerWidth - ghost.offsetWidth;
    var maxY = window.innerHeight - ghost.offsetHeight;
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);
    
    // Generate random movement values for ghost
    var randomMovementX = Math.floor(Math.random() * 200) - 100;
    var randomMovementY = Math.floor(Math.random() * 200) - 100;
    var randomMovementZ = Math.floor(Math.random() * 200) - 100;
    
    // Position ghost
    ghost.style.top = randomY + "px";
    ghost.style.left = randomX + "px";
    
    // Show ghost
    ghost.style.opacity = 1;
    
    // Update ghost movement based on random values
    ghost.style.transform = "translate3d(" + randomMovementX + "px," + randomMovementY + "px," + randomMovementZ + "px)";
    
    // Set a timeout to hide the ghost after 1 second
    setTimeout(function() {
      ghost.style.opacity = 0;
    }, 1000);
  }
  
  function startGhost() {
    // Show ghost after 5 seconds
    setTimeout(function() {
      showGhost();
      
      // Set a timeout to show ghost again after 2-3 minutes
      var randomTime = Math.floor(Math.random() * 60000) + 120000; // Random time between 2 and 3 minutes
      setTimeout(function() {
        startGhost();
      }, randomTime);
    }, 5000);
  }
  
  // Start ghost animation
  startGhost();
  
//Finsish!

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
  
  