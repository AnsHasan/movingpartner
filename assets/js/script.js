document.addEventListener("DOMContentLoaded", function() {
    // Carica il menu principale
    fetch('header-nav.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-nav').innerHTML = data;
      })
      .catch(error => console.error('Error loading the header:', error));
  
    // Carica il menu footer
    fetch('kontakt.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('angebote').innerHTML = data;
      })
      .catch(error => console.error('Error loading the kontakt:', error));

      fetch('footer-nav.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-nav').innerHTML = data;
      })
      .catch(error => console.error('Error loading the footer:', error));
  });
  
  