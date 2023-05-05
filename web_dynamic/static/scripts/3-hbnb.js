$(document).ready(function () {
  // Send a POST request to the server to get the list of places
  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    contentType: 'application/json',
    dataType: 'json',
    data: '{}',
    success: function (data) {
      // Iterate over the list of places and create an article tag for each one
      $.each(data, function (index, place) {
        const article = $('<article>');
        const title = $('<div class="title">').html('<h2>' + place.name + '</h2><div class="price_by_night">' + place.price_by_night + '</div>');
        const information = $('<div class="information">').html('<div class="max_guest">' + place.max_guest + ' Guests</div><div class="number_rooms">' + place.number_rooms + ' Bedrooms</div><div class="number_bathrooms">' + place.number_bathrooms + ' Bathroom</div>');
        const description = $('<div class="description">').text(place.description);
        article.append(title).append(information).append(description);
        $('SECTION.places').append(article);
      });
    }
  });
});
