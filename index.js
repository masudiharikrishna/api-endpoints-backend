const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the doctors database.');
  }
});

app.get('/doctors', (req, res) => {
  db.all('SELECT * FROM doctor', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      res.json(rows);
    }
  });
});

app.get('/doctors/:doctor_id', (req, res) => {
  const { doctor_id } = req.params;
  db.get(`SELECT * FROM doctor WHERE doctor_id = ${doctor_id}`, (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      if (!row) {
        res.status(404).json({ message: 'Doctor not found.' });
      } else {
        res.json(row);
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
