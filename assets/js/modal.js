// Function to open modal
function openModal(imageId) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modal-img');
    
    // Get the image src from the clicked image
    var clickedImage = document.getElementById(imageId);
    modalImg.src = clickedImage.src;

    // Show the modal
    modal.style.display = 'flex';
}

// Function to close modal when clicked
function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}
