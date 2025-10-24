const express=require("express");
const app=express();

//console.dir(app);

let port = 3000; //8080

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res)=>{
//     //console.log(req);
//     console.log("request received");
//     // res.send({
//     //     name: "apple",
//     //     color: "red",
//     //     }
//     // );
//     res.send("<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>");
// });

app.get("/", (req, res)=>{
    res.send("you contacted root path");
});

// app.get("/apple", (req, res)=>{
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req, res)=>{
//     res.send("you contacted orange path");
// });

// app.get("*", (req, res)=>{
//     res.send("this path does not exist.");
// });

// app.post("/", (req, res)=>{
//     res.send("you sent a post request to root");
// });

app.get("/:username/:id", (req, res)=>{
    //console.log(req.params);
    let {username, id}=req.params;
    //let htmlStr= `<h1>welcome @${username}!</h1>`;
    res.send(`welcome to the page of @${username}`);
});

app.get("/search", (req, res)=>{
    //console.log(req.query);
    let {q}=req.query;
    if(!q){
        res.send("<h1>nothing searched.");
    }
    res.send(`search results for query ${q}`);
});