$(document).ready(function () {
  const amenityIds = {};

  $('li input[type="checkbox"]').change(function () {
    const amenityId = $(this).parent().data('id');
    const amenityName = $(this).parent().data('name');

    if ($(this).is(':checked')) {
      amenityIds[amenityId] = amenityName;
    } else {
      delete amenityIds[amenityId];
    }

    const amenitiesList = Object.values(amenityIds).join(', ');
    $('.amenities h4').text(amenitiesList);
  });
});
