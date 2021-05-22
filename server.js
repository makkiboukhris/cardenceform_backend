const express = require('express');
const dbConnect = require('./config/dbConnect');
const dotenv = require('dotenv')
dotenv.config({ path: "./config/config.env" });
const router = require('./routes/users');

const app = express();

// Load env vars
console.log(process.env)
// connect to db
dbConnect();


app.use('/users', router);

const PORT =   process.env.PORT || 4000;
  
app.listen(4000, (err) =>
  err ? console.error(err) : console.log(`connection on port ${PORT}`)
);