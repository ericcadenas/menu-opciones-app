const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve the HTML file for /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Menu de Opciones app listening at http://localhost:${port}`);
});
