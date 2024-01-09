const express = require('express');
const sequelize = require('./util/databse');
const bodyparser = require('bodyparser');
const User = require('./models/user');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Origin', 'GET, POST, PUT, DELETE');
  next();
})

// test route
app.get('/', (req, res, next) => {
  console.log('Hello World');
});

// CRUD test
app.use('users', require('./routes/users'));

// error handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({message: message});
})

// sync database
sequelize
  .sync()
  .then(result => {
    console.log('Database connected');
    app.listen(3000);
  })
  .catch(err => console.log(err));
