// soundcite.js

// Wait until the document is ready
document.addEventListener("DOMContentLoaded", function() {
  // Find all elements with class 'soundcite'
  const soundciteElements = document.querySelectorAll('.soundcite');

  // Loop through each element
  soundciteElements.forEach(function(element) {
    // Attach a click event listener to each soundcite span
    element.addEventListener('click', function() {
      const audioUrl = element.getAttribute('data-soundcite-url');
      const start = parseInt(element.getAttribute('data-soundcite-start'), 10);
      const end = parseInt(element.getAttribute('data-soundcite-end'), 10);

      // Create an audio element and load the file
      const audio = new Audio(audioUrl);

      // When the audio starts, seek to the start time
      audio.currentTime = start / 1000; // Convert to seconds

      // Play the audio
      audio.play();

      // Stop the audio when it reaches the end time
      audio.addEventListener('timeupdate', function() {
        if (audio.currentTime >= end / 1000) {
          audio.pause();
        }
      });
    });
  });
});
