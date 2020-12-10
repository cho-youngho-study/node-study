import express from "express";
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
app.get('/', handleHome);
app.get('/profile', handleProfile);

//server
app.listen(PORT, handleListening);