const fs = require("fs");

fs.readFile("data.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error loading file",err);
        return;
    }
    console.log("File name: ",data)

    
})

