const express = require('express');
const app = express();

const path =require('path');
const mongoose =require('mongoose');
const passport =require('passport');
const flash =require('connect-flash');
const morgan =require('morgan');
const cookieParser =require('cookie-parser');
const bodyParser =require('body-parser');
const session =require('express-session');

const { url }=require('./config/database');

mongoose.connect(url, {
    useMongoClient: true
});

require('./config/passport')(passport);


//setting
app.set('port', process.env.PORT || 3000)//define el puerto por defecto sino usa el 3000
app.set('views', path.join(__dirname, 'views'))//estudiar
app.set('view engine', 'ejs');

//middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: 'fazwebtutorialnode',
    resave:false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); //puedes mandar mensaje cuando te logees

//routes
require('./app/routes')(app, passport);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})
//