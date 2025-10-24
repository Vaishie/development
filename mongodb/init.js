const mongoose=require("mongoose");
const Chat = require("./models/chat");

main()
    .then(()=>{
        console.log("connection successful");
    })
    .catch((err)=> console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test')
}

let allChats = [
    {
    from: "piupiu",
    to: "tuktuk",
    msg: "hey bish",
    created_at: new Date(),
    },
    {
    from: "piupiu",
    to: "tuktuk",
    msg: "hey bish",
    created_at: new Date(),
    },
    {
    from: "piupiu",
    to: "tuktuk",
    msg: "hey bish",
    created_at: new Date(),
    },
    {
    from: "piupiu",
    to: "tuktuk",
    msg: "hey bish",
    created_at: new Date(),
    },
    {
    from: "piupiu",
    to: "tuktuk",
    msg: "hey bish",
    created_at: new Date(),
    },
];

Chat.insertMany(allChats);