var onLoad = function (valueToScan, outputDiv) {

  var xhr = new XMLHttpRequest();
  var valToScan = valueToScan;
  xhr.open('GET', '/api/v1/math/tenfriendly/' + valueToScan, true);

  xhr.onreadystatechange = function () {
    var DONE = 4; // readyState 4 means the request is done.
    var OK = 200; // status 200 is a successful return.
    var outputString = "";

    if (xhr.readyState === DONE) {
      if (xhr.status === OK) {
        outputString = xhr.responseText;
      } else {
        outputString = 'Error: ' + xhr.status; // An error occurred during the request.
      }
      outputDiv.innerHTML = outputString;
    }
  }

  xhr.send('');

  /* /api/v1/math/tenfriendly/ */
}