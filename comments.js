// Create web server with express
const express = require('express');
const app = express();
const port = 3000;

// create a route for GET /comments
app.get('/comments', (req, res) => {
  res.json({ comments: [] });
});

// start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});