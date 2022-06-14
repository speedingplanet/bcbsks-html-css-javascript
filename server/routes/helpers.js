let express = require('express');
let lodash = require('lodash');
let router = express.Router();

/* GET home page. */
router.all('/reflect', function (req, res, next) {
  let resContent = [];

  if (!lodash.isEmpty(req.query)) {
    console.log('Found a query string (GET)');
    resContent.push(...dumpObject(req.query));
  }

  if (!lodash.isEmpty(req.body)) {
    console.log('Found a request body (POST)))');
    resContent.push(...dumpObject(req.body));
  }

  let responseAsList = '<ul>';
  resContent.forEach((keyValuePair) => {
    responseAsList += `<li>${keyValuePair}</li>`;
  });
  responseAsList += '</ul>';
  res.send(responseAsList);
});

function dumpObject(obj, res) {
  let content = [];
  for (let [key, value] of Object.entries(obj)) {
    content.push(`${key}: ${value}`);
  }
  return content;
}

module.exports = router;
