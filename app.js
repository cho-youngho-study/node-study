import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 4000;

const handleHome = (req,res) =>{
    res.send('hello world');
}

const handleProfile = (req,res) =>{
    res.send('profile page');
}

const handleListening = () =>{
    console.log(`Listening Port: ${PORT}`);
}

//route
// app.get('/', handleBetween, handleHome);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(helmet());
app.use(morgan('dev'));

app.get('/', handleHome);
app.get('/profile', handleProfile);

//server
app.listen(PORT, handleListening);