const express = require('express');
const app = express();
require('dotenv').config();
const axios = require('axios');
const cors = require('cors');

// adds CORS
app.use(cors());

// grabs SL public API and adds bearer token header to request.
app.get('/api', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.salesloft.com/v2/people.json',
      {
        headers: {
          Authorization: `bearer ` + process.env.API_KEY,
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    res.json(err);
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
