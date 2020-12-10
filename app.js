const express = require('express');
const app = express();

const PORT = 4000;

handleHome = (req,res) =>{
    res.send('hello world');
}

handleProfile = (req,res) =>{
    res.send('profile page');
}

handleListening = () =>{
    console.log(`Listening Port: ${PORT}`);
}

//route
app.get('/', handleHome);
app.get('/profile', handleProfile);

//server
app.listen(PORT, handleListening);