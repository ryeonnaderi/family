const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const app = express();

const logger = require("morgan");
const PORT = process.env.PORT || 3000;
const routes = require("./Routes")
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(logger("dev"));

if( process.env.NODE_ENV === "production"){
    app.use (express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI)

app.use(routes)

app.post("/submit", (req,res) =>{
    User.create(req.body)
    .then((dbUser) =>{
        res.json(dbUser)
    }).catch((err) =>{
        res.json(err)
    });
});

app.listen(PORT ,()=>{
    console.log("server is running on port" + PORT)
});