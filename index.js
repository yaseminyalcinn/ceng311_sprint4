$(document).ready(function() {
  function fetchImages() {
      const numImages = 10;
      const accessKey = 'jWLcwtdMf8OSR7_AMwWeAeY8tP374cMlaC7d83Gldg0';
      const apiUrl = `https://api.unsplash.com/photos/random?count=${numImages}&client_id=${accessKey}`;

      $.ajax({
          url: apiUrl,
          method: 'GET',
          success: function(data) {
              let imagesHtml = '';
              data.forEach(image => {
                  imagesHtml += `<div><img src="${image.urls.regular}" alt="${image.alt_description}"></div>`;
              });
              $('.slider').html(imagesHtml);
              $('.slider').slick({
                  autoplay: true,
                  autoplaySpeed: 1000,
                  dots: true,
                  arrows: false
              });
          },
          error: function() {
              console.error('Failed to fetch images from Unsplash.');
          }
      });
  }
  fetchImages();
});
