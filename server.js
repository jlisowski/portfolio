const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 2. Serve static files (HTML, CSS, JS) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

//fallback to index.html for SPA routing
app.get('/*splat', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Express server listening on http://localhost:${PORT}`);
});
