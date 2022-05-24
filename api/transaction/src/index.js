const express = require('express');
const dotenv = require('dotenv');

const connectDB = require('./db/db');

dotenv.config();
const port = process.env.PORT || 3003;
const app = express();

connectDB();

app.listen(port, () => console.log('transaction services started...'))