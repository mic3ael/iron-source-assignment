const express = require('express');
const router = express.Router();
const request = require("request");
const _ = require('lodash');

/* GET users listing. */
router.get('/', function (req, res, next) {

  const { name, sort } = req.query;

  if (!_.isString(name) || name.length < 1) {
    console.log("name is empty");
    return res.send([]);
  }

  const sortTypes = ["stars", "forks", "help-wanted-issues", "updated"];

  if (!_.isUndefined(sort) && !sortTypes.includes(sort)) {
    console.log("sort is empty");
    return res.status(400).send(`sort type has to be one of the following - ${sortTypes.join()}`);
  }

  const options = {
    method: 'GET',
    url: 'https://api.github.com/search/repositories',
    qs: { q: name, sort },
    headers: {
      'User-Agent': 'Assignment'
    }
  };

  console.log(`sending request - ${JSON.stringify(options)} to ${options.url}`);

  request(options, function (error, response, body) {

    if (error) {
      console.log(`error - ${error} from ${options.url}`);
      return next(new Error(error));
    }

    console.log(`body - ${body} from ${options.url}`);

    const json = JSON.parse(body);

    const { items, errors } = json;

    if (errors) {
      return res.status(400).send(json);
    }

    if (!Array.isArray(items)) {
      return res.send([]);
    }

    return res.send(items.slice(0, 10));
  });
});

module.exports = router;
