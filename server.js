const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Layani file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
