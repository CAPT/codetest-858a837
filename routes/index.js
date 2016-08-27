var express = require('express');
var router = express.Router();
var cluster = require('cluster');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ten Friendly Explorer' });
});

/* GET tenfriendly number API */
// TODO: factor this out into a dedicated file

var getTenFriendlies = function(max) {
  var i = 2
  var calc = (i*9)+1;
  //var output = [19,28,37,46,55,64,73,82,91];
  var output = [];
  var suppressOn = false;

  while (calc <= max) {

    if (!suppressOn) output.push(calc);

    // if calc is evenly divisible by 10 then temporarily suppress subsequent numbers
    if (calc % 10 === 0) {
      suppressOn = true;
    }

    // if first and last digit add up to 10 then we've come to the end of the suppressed
    // segment of the series, end suppression
    var numString = calc.toString();
    var firstDigit = parseInt(numString.slice(0,1));
    var lastDigit = parseInt(numString.slice(-1));
    if (firstDigit + lastDigit === 10) suppressOn = false;

    i++;
    calc = (i*9)+1;
  }

  // above algorithm doesn't catch excluded number "100"
  if (output.length > 9) output.splice(9,1);

  return output;
}

var scanTilTenOrMore = function(numArray) {
  var cumulative = 0;
  var accumulatedTenAt = -1;
  for (i=0; i < numArray.length; i++)
  {
    cumulative = cumulative + numArray[i];
    if (cumulative > 10) {
      // numbers added up past 10 before equaling 10; this number
      // is not 10-friendly.
      break;
    } else if (cumulative == 10) {
      // numbers added up to 10; this number is 10-friendly so far.
      // return the index at which we stopped
      accumulatedTenAt = i;
      break;
    }
  }

  return accumulatedTenAt;
}
var isTenFriendly = function(num) {
  var x = num.toString();
  var numAsArray = x.split("").map(Number);
  var result = true;
  var pass = true;

  while(numAsArray.length > 1) {
    accumulatedTenAt = scanTilTenOrMore(numAsArray);
    if (accumulatedTenAt == -1) {
      // exit; this number is not ten-friendly because we
      // went over ten before reaching ten
      pass = false;
      break;
    }
    else if (accumulatedTenAt == numAsArray.length - 1)
    {
      // we counted up to ten just as we reached the end of the remainder;
      // this number is totally tenfriendly so exit.
      break;
    } else {
      // remove the first char of the remainder since we've
      // already scanned it.
      numAsArray.shift();
    }
  }

  return pass;
}

var getTenFriendliesIfNumeric = function(inputNum) {

  var result = [];

  // continue only if input is an integer
  var isNumber = !isNaN(inputNum) && (Math.round(inputNum) == inputNum);

  if (isNumber) {
    result = getTenFriendlies(inputNum);

  }
  var cpuCount = require('os').cpus().length;
  console.log("cpuCount = " + cpuCount);
  console.log("result count is " + result.length);
  return JSON.stringify(result);
}

router.get('/api/v1/math/tenfriendly/:inputString', function(req, res) {
  var inputString = req.params.inputString;
  var outString = getTenFriendliesIfNumeric(inputString);

  res.json(outString);
});
module.exports = router;
