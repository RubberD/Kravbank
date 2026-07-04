const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the main page (double-extension filename handled here)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html.html'));
});

// Serve all static assets (JS, markdown files, images, etc.)
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Kravbank running on http://localhost:${PORT}`);
});
