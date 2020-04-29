const express = require('express')
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host: "localhost",
  user: "vand7160",
  password: "BigTop7",
  database: "campus_collective"
});

const app = express();

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.urlencoded({ extended: true }))
app.get('/users', function (req, res){
  connection.getConnection(function (err, connection){
    connection.query('SELECT * FROM users', function (error, results, fields){
      if (error) throw error;
      res.send(results);
    });
  });
});

app.post('/login', function( req, res){
  connection.getConnection(function (err, connection){
    // WHERE LOWER(Email) = LOWER(''+req.body.email+'')
    console.log(req.body.email)
    connection.query('SELECT Password FROM users', function(error, results, fields){
      if (error) throw error;
      console.log(results);
      res.send(results);
    })
  })
});


app.listen(4000, () => {
  console.log('Go to http://localhost:4000 to see data.');
})
