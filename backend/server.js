// console.log("Hello World");


// const http = require("http");

// const server = http.createServer((req,res) =>{
//     res.writeHead(200,{'Content-type':'text/plain'});
//     res.end("Hello Amit");
// })

// server.listen(3000,()=> {
//     console.log("Server running at http://localhost:3000");
// })


// const server = http.createServer((req,res) =>{
//     if(req.url === "/"){
//         res.writeHead(200,{'Content-type':'text/html'});
//         res.end("<h1>Welcome to Home Page</h1>");
//     }else if(req.url === "/login"){
//         res.writeHead(200,{'Content-type':'text/html'});
//         res.end("<h1>Welcome to Login Page</h1>");
//     }else if(req.url === "/signup"){
//         res.writeHead(200,{'Content-type':'text/html'});
//         res.end("<h1>Welcome to Signup Page</h1>");
//     }else if (req.url === "/logout"){
//         res.writeHead(200,{'Content-type':'text/html'});
//         res.end("<h1>You are logged out</h1>");
//     }else{
//         res.writeHead(404,{'Content-type':'text/html'});
//         res.end("<h1>Page Not Found</h1>");
//     }
// })

// server.listen(3000,()=> {
//     console.log("Server running at http://localhost:3000");
// })




// const express = require("express");
// const app = express();

// app.get("/",(req,res) =>{
//     res.send("<h1>Welcome to Home Page</h1>");
// })

// app.listen(3000,()=> {
//     console.log("Server running at http://localhost:3000");
// })


import express from "express";
const app = express();

app.get("/signup",(req,res) =>{
    res.send("Hello World from express")
});

app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");

})











// const myPromise = new Promise((resolve,reject) =>{
//     let success = true;
//     if(success){
//         resolve("Promise resolved successfully");
//     }else{
//         reject("Promise rejected");
//     }
// })

// myPromise.then((message) =>{
//     console.log(message);
// }).catch((error) =>{
//     console.log(error);
// })
