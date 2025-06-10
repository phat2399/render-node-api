const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.get('/', (req, res) => {
  res.send('<h1 style="color:#4CAF50; text-align:center;">🌐 Hello from Render + Node.js</h1>');
});

app.get('/now', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send('Error querying DB');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
