import app from "./app";

const PORT = 4000;

const handleListening = () =>{
    console.log(`port number is ${PORT}`);
}

app.listen(PORT, handleListening);