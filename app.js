import express from "express";
const app = express();

const PORT = 4000;

const handleHome = (req,res) =>{
    res.send('hello world');
}

const handleBetween = (req,res,next) => {
    console.log('Im between');
    next();
}

const handleProfile = (req,res) =>{
    res.send('profile page');
}

const handleListening = () =>{
    console.log(`Listening Port: ${PORT}`);
}

//route
// app.get('/', handleBetween, handleHome);

app.use(handleBetween);

app.get('/', handleHome);
app.get('/profile', handleProfile);

//server
app.listen(PORT, handleListening);