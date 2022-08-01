const express=require("express");
const app=express();
const PORT=9000;

app.get("/",(req,res)=>{
    res.send(
        "<div>" +
        "<h1>Welcome To IACSD</h1>"+
        "</div>"
    )
})

app.listen(PORT,()=>{
    console.log("Listening on server "+PORT);
})