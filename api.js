const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 1000);
  const responseObject = { h: randomNumber };
  res.json(responseObject);
});

app.listen(3000, () => {
  console.log('API server started on port 3000');
});
