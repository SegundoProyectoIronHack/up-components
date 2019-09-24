require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

const session    = require("express-session");
const MongoStore = require('connect-mongo')(session);
const flash      = require("connect-flash");

// Connection with the database
require("./configs/db.config")

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

hbs.registerPartials("./views/partials")
hbs.registerPartials("./views/partials/products")
hbs.registerPartials("./views/partials/products/cases")
hbs.registerPartials("./views/partials/products/coolings")
hbs.registerPartials("./views/partials/products/graphic-cards")
hbs.registerPartials("./views/partials/products/hard-drives")
hbs.registerPartials("./views/partials/products/keyboards")
hbs.registerPartials("./views/partials/products/monitors")
hbs.registerPartials("./views/partials/products/motherboards")
hbs.registerPartials("./views/partials/products/mouses")
hbs.registerPartials("./views/partials/products/power-supplies")
hbs.registerPartials("./views/partials/products/processors")
hbs.registerPartials("./views/partials/products/ram-memories")

hbs.registerHelper('ifUndefined', (value, options) => {
  if (arguments.length < 2)
      throw new Error("Handlebars Helper ifUndefined needs 1 parameter");
  if (typeof value !== undefined ) {
      return options.inverse(this);
  } else {
      return options.fn(this);
  }
});

// Helpers
hbs.registerHelper('calculateDiscount', require("./helpers/calculate-discount.helper"))
hbs.registerHelper('calculateTaxes', require("./helpers/calculate-taxes.helper"))

// default value for title local
app.locals.title = 'UP Components';


// Enable authentication using session + passport
app.use(session({
  secret: 'irongenerator',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore( { mongooseConnection: mongoose.connection })
}))
app.use(flash());
require('./passport')(app);
    
// Routes
app.use('/', require('./routes/index.routes'));
      

module.exports = app;
