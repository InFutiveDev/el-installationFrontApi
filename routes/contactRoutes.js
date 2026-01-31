const express = require('express');
const router = express.Router();

// Example contact route
router.get('/', (req, res) => {
  res.json({ message: 'Contact route working' });
});

module.exports = router;
