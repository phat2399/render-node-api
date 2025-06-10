const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>🌈 Dynamic Node Web</title>
      <style>
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(to right, #00c6ff, #0072ff);
          color: #fff;
          animation: fadeIn 1s ease-in-out;
        }
        .container {
          max-width: 800px;
          margin: 80px auto;
          background-color: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 0 20px rgba(0,0,0,0.2);
          backdrop-filter: blur(8px);
        }
        h1 {
          font-size: 48px;
          margin-bottom: 20px;
          color: #ffffff;
          text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
        }
        p {
          font-size: 20px;
          color: #e0f7fa;
        }
        .btn {
          margin-top: 30px;
          background-color: #ff4081;
          border: none;
          color: white;
          padding: 12px 24px;
          font-size: 18px;
          border-radius: 8px;
          transition: background 0.3s ease;
          cursor: pointer;
        }
        .btn:hover {
          background-color: #f50057;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello from Node.js 🌟</h1>
        <p>This is a colorful and animated dynamic web page!</p>
        <button class="btn" onclick="alert('✨ Thanks for clicking!')">Click me</button>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`🌐 App running on http://localhost:${port}`);
});

require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Kiểm tra kết nối
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Lỗi kết nối DB:', err);
  } else {
    console.log('Kết nối DB thành công:', res.rows[0]);
  }
});

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1 style="color:blue;text-align:center;">Welcome to Your Colorful Node.js API 🎨</h1>');
});

// API GET tất cả dữ liệu (ví dụ với bảng "users")
app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Lỗi khi truy vấn CSDL");
  }
});

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});


