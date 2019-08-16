const express = require('express');
const app = express();
require('dotenv').config();
const axios = require('axios');
const cors = require('cors');

app.use(cors());

app.get('/slapi', (req, res) => {
  const config = {
    headers: { Authorization: 'bearer ' + process.env.API_KEY },
  };
  axios
    .get('https://api.salesloft.com/v2/people.json', null, config)
    .then(res => res.status(200).json(res.data))
    .catch(err => console.log(err));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
