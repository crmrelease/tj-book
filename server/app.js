const express = require('express')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const session = require('express-session')
const flash = require('connect-flash')
const bodyParser= require('body-parser')
const connect = require('./models')
const passport = require('passport');
const cors =require('cors')

const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth');
const tokenRouter = require('./routes/token');

const passportConfig = require('./passport');



require('dotenv').config();

const app = express()
connect()

const sessionMiddleware = session({
    resave:false,
    saveUninitialized:false,
    secret:process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false,
    }
    })

app.set('port',process.env.PORT||3299);
passportConfig(passport);


app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(sessionMiddleware);
app.use(flash())
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.use('/', indexRouter);
app.use('/auth',authRouter);
app.use('/token',tokenRouter);



app.use((req,res,next)=>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.use((req,res,next)=>{
    res.locals.message = err.message;
    res.locals.error = req.app.get('env')==='development'? err:{};
    res.status(err.status||500);
    res.render('error')
})


app.listen(app.get('port'),(req,res,next)=>{
    console.log(`${app.get('port')} 번에서 가져오고 있슴다.`);
})

