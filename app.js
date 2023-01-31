const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("root is working");
});

app.get("/about", (req, res) => {
    res.send("about page is working");
});

app.get("/home", (req, res) => {
    res.send("home page is working");
});

app.get("/works", (req, res) => {
    res.send("works page is working");
});

app.get("/gallery", (req, res) => {
    res.send("gallery page is working");
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});