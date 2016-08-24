var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ten Friendly Explorer' });
});

/* GET tenfriendly number API */
// TODO: factor this out into a dedicated file

var sum = function(a,b) { return a + b; }

var getSum = function(num) {
  var x = num;
  var splitNum = x.split("").map(Number);
  return splitNum.reduce(sum);
}

var getNumsThatSumToTen = function(num) {
  var output = [];
  for (i=19; i <= num; i++)
  {
    if (getSum(i.toString()) == 10)
    {
      output.push(i);
    }
  }
  return output;
}
var getTenFriendlies = function(inputNum) {

  var result = [];

  // continue only if input is an integer
  var isNumber = !isNaN(inputNum) && (Math.round(inputNum) == inputNum);

  if (isNumber) {
    result = getNumsThatSumToTen(inputNum);

  }

  return JSON.stringify(result);
}

router.get('/api/v1/math/tenfriendly/:inputString', function(req, res) {
  var inputString = req.params.inputString;
  var outString = getTenFriendlies(inputString);
  res.json(outString);
});
module.exports = router;
