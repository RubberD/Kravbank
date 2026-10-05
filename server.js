const express = require('express');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

// Bruk Helmet for å sette sikkerhetsrelaterte HTTP-headers
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://unpkg.com"],
    scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://unpkg.com"],
    "frame-ancestors": ["'none'"],
  },
}));
app.use(helmet.xFrameOptions({ action: "deny" }));

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
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Serve all static assets (JS, markdown files, images, etc.)
app.use(express.static('public'));

// Egen 404-håndtering. Express sin innebygde 404 overskriver CSP-headeren fra Helmet
// med "default-src 'none'", som mangler frame-ancestors og form-action (ZAP-varsel 10055).
app.use((req, res) => {
  res.status(404).type('text/plain').send('Fant ikke siden.');
});

app.listen(PORT, () => {
  console.log(`Kravbank running on http://localhost:${PORT}`);
});
