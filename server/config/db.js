const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password: 'root',
  database: 'test'
});
db.connect((err) => {
  if (err) {
    console.log('Error connecting to database');
  } else {
    console.log('Connected to database');
  }
});

db.query('SELECT * FROM users', (err, result) => {
    console.log("result",result);
});
    
