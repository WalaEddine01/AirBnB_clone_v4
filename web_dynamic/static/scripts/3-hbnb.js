document.addEventListener('DOMContentLoaded', function () {
  const url = "http://localhost:5001/api/v1/places_search";
  $.ajax({
    type: "POST",
    url: url,
    contentType: "application/json",
    data: JSON.stringify({}),
  }).done(function (data) {
    for (const place of data) {
      const article = ['<article>',
        '<div class="title_box">',
        `<h2>${place.name}</h2>`,
        `<div class="price_by_night">$${place.price_by_night}</div>`,
        '</div>',
        '<div class="information">',
        `<div class="max_guest">${place.max_guest} Guest(s)</div>`,
        `<div class="number_rooms">${place.number_rooms} Bedroom(s)</div>`,
        `<div class="number_bathrooms">${place.number_bathrooms} Bathroom(s)</div>`,
        '</div>',
        '<div class="description">',
        `${place.description}`,
        '</div>',
        '</article>'];
      $('.places').append(article.join(''));
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  $.get('http://localhost:5001/api/v1/status/', function (data, status) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const amenities = {};
  $('input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      amenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenities[$(this).data('id')];
    }
    const amenitiesList = Object.values(amenities);
    if (amenitiesList.length > 0) {
      $('.amenities h4').text(amenitiesList.join(', '));
    } else {
      $('.amenities h4').html('&nbsp;');
    }
  }
  );
});
