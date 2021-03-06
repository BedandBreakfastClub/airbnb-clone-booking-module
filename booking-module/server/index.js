const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const location = require('../database/Location.js');


const app = express();
const port = process.env.PORT || 3004;

app.use(express.static('client/dist'));
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/api/rooms/:listingId/booking', (req, res) => {
  location.find({ id: req.params.listingId })
    .exec((error, results) => {
      res.send(results);
    });
});

app.get('/rooms/:listingId/booking', (req, res) => {
  const options = {
    root: path.join(__dirname, '..', 'client/dist/'),
  };
  res.sendFile('index.html', options);
});
