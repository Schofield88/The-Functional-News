const express = require('express');
const es6Renderer = require('express-es6-template-engine');
// const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const homeRouter = require('./routes/home');
const newsRouter = require('./routes/news');

const app = express();
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'views')));

app.use('/', homeRouter);
app.use('/news', newsRouter);

module.exports = app;
