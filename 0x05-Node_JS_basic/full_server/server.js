/**
* @file Server for the App
* @author Simpa
*/

import express from 'express';

const routes = require('./routes/index');

const app = express();
app.get('/', routes);
app.get('/students', routes);
app.get('/students/:major', routes);
app.listen(1245);

module.exports = app;
