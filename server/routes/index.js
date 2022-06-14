let express = require('express');
let lodash = require('lodash');
let router = express.Router();

/* GET home page. */
router.get('/add-client', function (req, res, next) {
  if (lodash.isEmpty(req.query)) {
    res.status(404).send('Could not find query string');
    return;
  }

  const { firstName, lastName, city, state, policyHolder, dependents } = req.query;

  if (!firstName) {
    res.status(404).send('No firstName found.');
    return;
  } else if (!lastName) {
    res.status(404).send('No lastName found.');
    return;
  } else if (!city) {
    res.status(404).send('No city found.');
    return;
  } else if (!state) {
    res.status(404).send('No state found.');
    return;
  }

  let resContent = `Adding ${firstName} ${lastName} from ${city}, ${state}. <br>`;
  if (policyHolder) {
    resContent += `They are${policyHolder ? '' : ' not'} the main policy holder. <br>`;
  }
  if (dependents) {
    resContent += `They have ${dependents === 'no' ? 'no' : ''} dependents`;
  }

  res.send(resContent);
});

module.exports = router;
