const express = require("express");
const path = require("path");
require("./db/conn");

const app = express();
const port = process.env.PORT || 5000;


// setting the path
const staticpath = path.join(__dirname, "../public");


// middleware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.static(staticpath));
app.set("view engine", "hbs");

// routing
// app.get(path,call)
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/contact",(req,res)=>{
    res.render("contact");
});

// server
app.listen(port, ()=>{
    console.log(`server is running at port no ${port}`);
});