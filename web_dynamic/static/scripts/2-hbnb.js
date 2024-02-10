document.addEventListener('DOMContentLoaded', function () {
  const res = $.get('http://0.0.0.0:5001/api/v1/status/');
  if (res.status === 'OK') {
    $('#api_status').addClass('available');
  }
  else {
    $('#api_status').removeClass('available');
  }
});
