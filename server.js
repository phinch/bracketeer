const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const app = express();
const port = process.env.PORT || 5000;

const ESPNGROUPURL = 'http://games.espn.com/tournament-challenge-bracket/2017/en/group?groupID='

function getGroup(groupID) {
  request('ESPNGROUPURL' + '1594149', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      console.log($('.group-header').text());
    }
  });
}

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello from Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
