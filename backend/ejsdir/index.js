const express = require("express");
const app = express();
const path= require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/css")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res)=>{
   // res.send("this is home");
   res.render("home.ejs");
});

app.get("/hello", (req, res)=>{
   res.send("hello");
});

app.get("/rolldice", (req, res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
   res.render("rolldice.ejs", {diceVal});
});

app.get("/ig/:username", (req, res)=>{
//    const followers=["emma", "robert", "bradley"];
    let {username}=req.params;
   //console.log(username);
   //res.render("instagram.ejs", {username, followers});
   const instaData = require("./data.json");
   //console.log(instaData);
   const data=instaData[username];
   //console.log(data);
   if (data){
    res.render("instagram.ejs", {data});
   }else{
    res.render("error.ejs");
   }
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});