$(document).ready(function () {
  // Amenities checkbox event listener
  const amenities = {};
  $('input[type="checkbox"]').change(function () {
    if (this.checked) {
      amenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenities[$(this).data('id')];
    }
    // update h4 amenities list
    $('div.amenities h4').text(Object.values(amenities).join(', '));
  });

  // Search places button event listener
  $('button').click(function () {
    $.ajax({
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ amenities: Object.keys(amenities) }),
      success: function (data) {
        // Remove current places
        $('section.places').empty();
        // Loop through new places and create article tags
        for (const place of data) {
          const article = [
            '<article>',
            '<div class="title_box">',
              `<h2>${place.name}</h2>`,
              `<div class="price_by_night">$${place.price_by_night}</div>`,
              '</div>',
              '<div class="information">',
              `<div class="max_guest">${place.max_guest} Guests</div>`,
              `<div class="number_rooms">${place.number_rooms} Bedrooms</div>`,
              `<div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>`,
              '</div>',
              '<div class="description">',
              `${place.description}`,
              '</div>',
              '</article>'
          ].join('');
          $('section.places').append(article);
        }
      }
    });
  });
});
