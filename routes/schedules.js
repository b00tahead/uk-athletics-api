var express = require('express');
var router = express.Router();

var parser = require('rss-parser');

/* GET users listing. */
router.get('/', function(req, res, next) {

  var options = {
    customFields: {
      item: [
        ['ev:location', 'location'],
        ['ev:startdate', 'startDate'],
        ['ev:enddate', 'endDate'],
        ['ev:localstartdate', 'localStartDate'],
        ['ev:localenddate', 'localEndDate'],
        ['s:teamlogo', 'teamLogo'],
        ['s:opponentlogo', 'opponentLogo']
      ]
    }
  };

  parser.parseURL('http://www.ukathletics.com/calendar.ashx/calendar.rss', options, function(err, parsed) {
    res.json(parsed.feed.entries);
  });
});

router.get('/:team_id', function(req, res, next) {

  var options = {
    customFields: {
      item: [
        ['ev:location', 'location'],
        ['ev:startdate', 'startDate'],
        ['ev:enddate', 'endDate'],
        ['ev:localstartdate', 'localStartDate'],
        ['ev:localenddate', 'localEndDate'],
        ['s:teamlogo', 'teamLogo'],
        ['s:opponentlogo', 'opponentLogo']
      ]
    }
  };

  parser.parseURL('http://www.ukathletics.com/calendar.ashx/calendar.rss?sport_id=' + req.params.team_id, options, function(err, parsed) {
    res.json(parsed.feed.entries);
  });

});

module.exports = router;
