const express = require('express');
const { Pool } = require('pg');
const ejs = require('ejs');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'customer_details',
    password: 'kusuma', 
    port: 5432, 
  });
  
const query = 'SELECT * FROM customer';

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    let rows = result.rows;
    rows = rows.sort((a, b) => a.sno - b.sno);
    res.json(rows);
  });
});
app.post('/nameSearch', (req, res) => {
  console.log(req.body);
  const dataSearch = req.body.name;
  console.log(`This name search is: ${dataSearch}`);
  
  const query = {
    text: 'SELECT * FROM customer WHERE customer_name ILIKE $1',
    values: [`${dataSearch}%`],
  };
  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    let rows = result.rows;
    rows = rows.sort((a, b) => a.sno - b.sno);
    res.json(rows);

   });
});

app.post('/LocationSearch', (req, res) => {
  console.log(req.body);
  const dataSearch = req.body.name;
  console.log(`This name search is: ${dataSearch}`);
  
  const query = {
    text: 'SELECT * FROM customer WHERE location ILIKE $1',
    values: [`${dataSearch}%`],
  };
  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    let rows = result.rows;
    rows = rows.sort((a, b) => a.sno - b.sno);
    res.json(rows);

   });
});


const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});