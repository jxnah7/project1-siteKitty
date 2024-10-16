// script.js

// Set a minimum delay for the loading screen (e.g., 1.5 seconds)
const minimumLoadingTime = 1000;

// Capture the time when the page starts loading
const loadingStartTime = new Date().getTime();

window.addEventListener('load', function() {
    // Capture the time when the page finishes loading
    const loadingEndTime = new Date().getTime();
    
    // Calculate how long the page took to load
    const loadingDuration = loadingEndTime - loadingStartTime;
    
    // Calculate the remaining time to reach the minimum loading time
    const remainingTime = minimumLoadingTime - loadingDuration;

    // Ensure the loading screen is shown for at least the minimum time
    setTimeout(function() {
        // Hide the loading screen
        document.getElementById('loading-screen').style.display = 'none';
        
        // Show the main content
        document.getElementById('main-content').style.display = 'block';
    }, Math.max(remainingTime, 0));  // If remaining time is negative, use 0
});
