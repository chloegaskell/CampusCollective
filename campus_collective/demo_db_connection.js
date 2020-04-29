var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "vand7160",
  password: "BigTop7",
  database: "campus_collective"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const QUERY = 'SELECT * FROM items';

con.query(QUERY, (err, results) =>{
  if(err) {
    console.log(err);
  } else {
    console.log(results);
  }
});
