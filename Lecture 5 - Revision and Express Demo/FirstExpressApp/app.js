console.log("Our express app")
var express = require("express");

var app = express();
const port = 3000;

// app.get("/",function(req,res){
//     res.send("Hi there");
// });

// app.get("/parag",function(req,res){
//     res.send("Parag maha suar hai");
// });

// app.get("/samarth",function(req,res){
//     res.send("Samarth atty fasid hai");
// });

// app.get("/divyansh",function(req,res){
//     res.send("tbabe saand ka bachcha");
// });

app.get("/speak/:animal", function(req,res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:message/:times", function(req,res){
    var message = req.params.message;
    var times = res.params.time;
    var results = "";

    for(var i =0; i< times; i++){
        results+=message + " ";
    }
    res.send(results);
})

app.get("*", function(req,res){
    res.send("Page not found");
});

// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("Server has started");
// });

app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`))