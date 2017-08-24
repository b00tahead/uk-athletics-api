var express = require('express');
var router = express.Router();

var parser = require('rss-parser');

/* GET users listing. */
router.get('/', function(req, res, next) {

  var options = {
    customFields: {
      item: [
        ["title", "title"],
        ["description", "description"],
        ["link", "link"],
        ["guid", "guid"],
        ["ev:location", "location"],
        ["ev:startdate", "startDate"],
        ["ev:enddate", "endDate"],
        ["s:localstartdate", "localStartDate"],
        ["s:localenddate", "localEndDate"],
        ["s:teamlogo", "teamLogo"],
        ["s:opponentlogo", "opponentLogo"],
        ["s:gameid", "gameId"],
        ["s:gamepromoname", "gamePromoName"],
        ["s:links", "links"],
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
        ["title", "title"],
        ["description", "description"],
        ["link", "link"],
        ["guid", "guid"],
        ["ev:location", "location"],
        ["ev:startdate", "startDate"],
        ["ev:enddate", "endDate"],
        ["s:localstartdate", "localStartDate"],
        ["s:localenddate", "localEndDate"],
        ["s:teamlogo", "teamLogo"],
        ["s:opponentlogo", "opponentLogo"],
        ["s:gameid", "gameId"],
        ["s:gamepromoname", "gamePromoName"],
        ["s:links", "links"],
      ]
    }
  };

  parser.parseURL('http://www.ukathletics.com/calendar.ashx/calendar.rss?sport_id=' + req.params.team_id, options, function(err, parsed) {
    res.json(parsed.feed.entries);
  });

});

module.exports = router;
