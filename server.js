const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();
const PORT = process.env.PORT || 5000;

// 1. SPA routing fallback: Redirects non-file requests to index.html
app.use(history());

// 2. Serve static files (HTML, CSS, JS) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// 3. Start the Express server
app.listen(PORT, () => {
  console.log(`[Express] Server running on http://localhost:${PORT}`);
});
