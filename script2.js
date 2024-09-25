document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('sendButton');
    const inputText = document.getElementById('inputText');
    const guideElements = document.querySelectorAll('.guide h1'); // Select all guide headings
    const guideContainer = document.querySelector('.guide'); // The guide container
    let isGuideVisible = false; // Track the visibility of the guide

    // Event listener for the button click
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default button action

        // Get input value
        const inputValue = inputText.value.trim();

        // Only generate particles if there's input
        if (inputValue) {
            // Generate particles
            generateParticles();

            // Clear the input text
            inputText.value = ''; // This clears the input
        }
    });

    // Function to generate particles
    function generateParticles() {
        for (let i = 0; i < 3; i++) {
            let randomX = Math.random() * (window.innerWidth * 0.8); // Adjust the width based on your canvas size
            let randomY = Math.random() * (window.innerHeight * 0.7); // Adjust the height based on your canvas size
            
            // Spawn a new particle at a random position
            particles.push(new Particle(randomX, randomY, 5, 75));
        }
    }

    // Event listener for keydown to show the guide (using 'Escape' key)
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && !isGuideVisible) { // Check if 'Escape' key is pressed and guide is not visible
            guideContainer.style.display = 'block'; // Show the guide
            isGuideVisible = true; // Set the flag to true
        }
    });

    // Event listener for keyup to hide the guide (using 'Escape' key)
    document.addEventListener('keyup', function(event) {
        if (event.key === 'Escape' && isGuideVisible) { // Check if 'Escape' key is released and guide is visible
            guideContainer.style.display = 'none'; // Hide the guide
            isGuideVisible = false; // Reset the flag
        }
    });

    // Event listener for guide clicks
    guideElements.forEach(guide => {
        guide.addEventListener('click', function() {
            // Your action for guide click
            alert(`You clicked on: ${guide.innerText}`); // Example action
        });
    });
});
