// Create the cursor trail effect
document.addEventListener('mousemove', (e) => {
  const cursor = document.createElement('div');
  cursor.classList.add('cursor-trail');

  // Set the position of the cursor trail
  cursor.style.left = `${e.pageX - 5}px`; // Offset by half the size of the trail
  cursor.style.top = `${e.pageY - 5}px`;

  // Append the cursor trail to the body
  document.body.appendChild(cursor);

  // Remove the trail after the animation ends
  setTimeout(() => {
    cursor.remove();
  }, 500); // Match the animation duration (0.5s)
});

// Optionally, change the color of the trail dynamically
document.addEventListener('mousemove', (e) => {
  const trails = document.querySelectorAll('.cursor-trail');
  trails.forEach(trail => {
    trail.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`; // Random color
  });
});
