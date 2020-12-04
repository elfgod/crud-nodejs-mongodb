const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
require('./database');

// Initializations
const app = express();

// Middlewares
app.use(express.urlencoded({extended: false}));


// Settings
app.set('PORT', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Global Variables

// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;