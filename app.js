require('./config/database');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors')

const app = express()

app.use(cors())

const usersRouter = require('./app/routes/users');
const notesRouter = require('./app/routes/notes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/notes', notesRouter)

module.exports = app;