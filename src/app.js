'use strict';
const express   = require('express');
const path      = require('path');
const app       = express();
const apiRoutes = require('./routes/api.routes');
const webRoutes = require('./routes/web.routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', webRoutes);

module.exports = app;