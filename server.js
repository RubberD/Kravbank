const express = require('express');
const path = require('path');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

// Definer regler for rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutter
  max: 100, // Maksimalt antall forespørsler per IP innenfor vinduet
  message: 'For mange forespørsler fra denne IP-adressen, vennligst prøv igjen senere.',
});

// Apply rate limiting to all requests
app.use(limiter);

// Serve the main page (double-extension filename handled here)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve all static assets (JS, markdown files, images, etc.)
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Kravbank running on http://localhost:${PORT}`);
});
