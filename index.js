const express = require('express');
const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const users = require('./routes/users');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const app = express();

mongoose.connect('mongodb://localhost/vidly')
  .then(() => console.log('Conneted to MongoDB...'))
  .catch(err => console.error('Failed to connect to MongoDB...', err));
  
app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));