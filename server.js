const express = require('express');
const dbConnect = require('./config/dbConnect');
const router = require('./routes/users');
const dotenv = require('dotenv')
const app = express();

// Load env vars
dotenv.config({ path: "./config/config.env" });
console.log(process.env)
// connect to db
dbConnect();


app.use('/users', router);

const PORT =   4000 || process.env.PORT;
  
app.listen(4000, (err) =>
  err ? console.error(err) : console.log(`connection on port ${PORT}`)
);