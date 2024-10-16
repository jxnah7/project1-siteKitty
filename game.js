    // Select each image and its corresponding sound
    const imageSoundMap = {
      'img1': document.getElementById('sound1'),
      'img2': document.getElementById('sound2'),
      'img3': document.getElementById('sound3'),
      'img4': document.getElementById('sound4')
    };

    // Add event listeners for each image
    document.querySelectorAll('.img-div img').forEach(img => {
      img.addEventListener('click', function() {
        // Get the corresponding sound based on the image clicked
        const sound = imageSoundMap[this.id];
        
        // Pause any currently playing sound and reset
        for (let soundId in imageSoundMap) {
          imageSoundMap[soundId].pause();
          imageSoundMap[soundId].currentTime = 0; // Reset sound
        }
        
        // Play the clicked sound
        sound.play();
      });
    });