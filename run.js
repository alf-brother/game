const http = require('http');

const hostname = '127.0.0.1';
const port = 8001;

var express = require ('express');
var path = require ('path');
var cookieParser = require ('cookie-parser');

var session = require('express-session');

//var side_logout  = require ('./sides/logout');
//var side_login 	= require ('./sides/login');
//var side_play 	= require ('./sides/play');
//var side_user   = require ('./sides/user');

var side_index  = require ('./routes/index');
var app = express();

// setup session
/*
app.use(session({
    secret: 'b32933251f8d100792c03e4c0f4035e3',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 3600000 * 2
    }
}));
*/
app.set ('views', path.join(__dirname, 'views'));
app.set ('view engine', 'ejs');
app.engine ('ejs', require ('express-ejs-extend'));

app.use (express.json());
app.use (express.urlencoded ({extended:false}));
app.use (cookieParser ());
app.use(express.static(path.join(__dirname, 'public')));

var logger = function (req, res, next) {
  console.log("** NEW REQUEST **");
  console.log(req.ip);
  console.log(req.method);
  console.log(req.path);
  next();
}
app.use(logger);

// authentication middleware
app.use((req, res, next) => {
    let _ = require('underscore');
    let openPath = ['/', '/style/style.css'];
    if (req.path.startsWith("/") ||
        req.path.startsWith("/style") ||
        req.path.startsWith("/login") ||
        req.path.startsWith("/favicon.ico")) {
        return next();
    }
    res.redirect("/");
});

//app.use ('/logout', side_logout);
//app.use ('/login', side_login);
//app.use ('/game', side_play);
//app.use ('/user', side_user);
//app.use ('/docu', side_doku);
//app.set ('port', port);

app.use('/', side_index);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

