let express = require('express');
let serveIndex = require('serve-index');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let helpersRouter = require('./routes/helpers');

let app = express();
let projectRoot = path.join(__dirname, '../');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(projectRoot), serveIndex(projectRoot, { icons: true }));

app.use('/', indexRouter);
app.use('/helpers', helpersRouter);

module.exports = app;
