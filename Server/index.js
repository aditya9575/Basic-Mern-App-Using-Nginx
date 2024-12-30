const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());


app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from backend!' });
});

// Sample Data API
app.get('/api/data', (req, res) => {
  res.json({ data: ['Item 1', 'Item 2', 'Item 3'] });
});

// Handle Feedback Submission
app.post('/api/feedback', (req, res) => {
  const { feedback } = req.body;
  if (!feedback) {
    return res.status(400).json({ message: 'Feedback is required!' });
  }
  console.log('Feedback received:', feedback);
  res.json({ message: 'Thank you for your feedback!' });
});

// Start server
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
