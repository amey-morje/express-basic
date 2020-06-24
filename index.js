var express = require('express');
var app = express()

const hostname = "localhost";
const port = 3000;

app.get("/",(req,res)=>{
    res.send("Welcome to HomePage")
});

app.get("/speak/:animal",(req,res)=>{
    var animal = req.params.animal
    var sounds = {
        pig: "Oink",
        cat: "Meow",
        dog: "Woof",
        cow: "Moo"
    }
    var sound = sounds[animal]
    res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:message/:times",(req,res)=>{
    var message=req.params.message;
    var times=Number(req.params.times);
    var result =""
    for(var i=0; i<times; i++){
        result+= message + " ";
    }
    res.send(result)
});

app.get('*',(req,res)=>{
    res.send("Sorry, Page not Found")
});

app.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}`)
});