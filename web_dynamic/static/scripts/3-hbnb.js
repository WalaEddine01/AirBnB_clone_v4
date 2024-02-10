document.addEventListener('DOMContentLoaded', function () {
  const url = "http://localhost:5001/api/v1/places_search";
  $.ajax(
    {
      url: url,
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({}),
      success: function (data) {
        for (const place of data) {
          const article = $('<article></article>');
          const title = $('<div class="title"></div>');
          title.append('<h2>' + place.name + '</h2>');
          title.append('<div class="price_by_night">$' + place.price_by_night + '</div>');
          article.append(title);
          const information = $('<div class="information"></div>');
          const maxGuest = place.max_guest + ' Guest';
          if (place.max_guest > 1) {
            maxGuest += 's';
          }
          const numberRooms = place.number_rooms + ' Bedroom';
          if (place.number_rooms > 1) {
            numberRooms += 's';
          }
          const numberBathrooms = place.number_bathrooms + ' Bathroom';
          if (place.number_bathrooms > 1) {
            numberBathrooms += 's';
          }
          information.append('<div class="max_guest">' + maxGuest + '</div>');
          information.append('<div class="number_rooms">' + numberRooms + '</div>');
          information.append('<div class="number_bathrooms">' + numberBathrooms + '</div>');
          article.append(information);
          const description = $('<div class="description"></div>');
          description.append(place.description);
          article.append(description);
          $('section.places').append(article);
        }
      }
    }
  );
});
