const express = require("express");
const app = express();

let style = "lux-light";
let accent = "default";

app.all("/",function(req,res)
{
    res.sendFile("test.html");
});

app.all("/theme/:theme/:accent", function(req,res)
{
    style = req.params.theme;
    res.redirect("/");
});

app.all("/style.css", function(req, res)
{
    res.sendFile("../css/" + style + "/" + accent + ".css");
});

app.listen(80);