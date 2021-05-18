const express = require('express');
const dbConnect = require('./config/dbConnect');
const router = require('./routes/users');

const app = express();
app.use(express.json());

// connect to db
dbConnect();

app.use('/users', router);

const PORT =   4000 || process.env.PORT;
  
app.listen(4000, (err) =>
  err ? console.error(err) : console.log(`connection on port ${PORT}`)
);