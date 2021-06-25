const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const request = require('superagent');
const { mungeLocationResponse } = require ('./munge.js');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); // http logging


app.get('/hello', async(req, res) => {
  try {
    
    res.send('world');
  } catch(e) {
    
    res.status(500).json({ error: e.message });
  }
});

app.get('/location', async(req, res) => {
  try {
    
    const data = await request.get('https://us1.locationiq.com/v1/search.php?key=pk.6142af701ca69d27a58c3f222ed1819c&q=seattle&format=json');

    const mungedData = mungeLocationResponse(data.body);

    res.json(mungedData);
  
  } catch(e) {
    
    res.status(500).json({ error: e.message });
  }
});


module.exports = app;
