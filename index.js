// JavaScript Logic
let selectedDifficulty = null;  // Store the selected difficulty

// Get the buttons
const easyButton = document.getElementById('easy');
const mediumButton = document.getElementById('medium');
const hellButton = document.getElementById('hell');
const confirmButton = document.getElementById('confirm');

// Add event listeners to the difficulty buttons
easyButton.addEventListener('click', () => {
    selectedDifficulty = 'easy';
    highlightSelection(easyButton);
});

mediumButton.addEventListener('click', () => {
    selectedDifficulty = 'medium';
    highlightSelection(mediumButton);
});

hellButton.addEventListener('click', () => {
    selectedDifficulty = 'hell';
    highlightSelection(hellButton);
});

// Function to highlight the selected difficulty
function highlightSelection(selectedBtn) {
    // Reset all button colors
    easyButton.style.backgroundColor = '';
    mediumButton.style.backgroundColor = '';
    hardButton.style.backgroundColor = '';

    // Highlight the selected button
    selectedBtn.style.backgroundColor = 'lightblue';
}

// Event listener for confirm button
confirmButton.addEventListener('click', () => {
    if (selectedDifficulty) {
        // Redirect to the corresponding page
        window.location.href = `${selectedDifficulty}.html`;
    } else {
        alert('Please select a difficulty before confirming!');
    }
});
