let express = require('express');
let serveIndex = require('serve-index');
let cors = require('cors');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let helpersRouter = require('./routes/helpers');
let projectRoot = path.join(__dirname, '../');

let app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', indexRouter);
app.use('/helpers', helpersRouter);

// Make sure this is the last item
app.use('/', express.static(projectRoot), serveIndex(projectRoot, { icons: true }));

module.exports = app;
