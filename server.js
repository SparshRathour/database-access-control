const express=require('express');
const app=express();
// const dotenv=require('dotenv');
// dotenv.config();
const mongo=require('mongodb');
const axios = require('axios');
const cookieParser = require('cookie-parser');
app.use(express.static('public'))
app.use(cookieParser());

const MongoClient=mongo.MongoClient;

const Contact_DB=require("./controllers/DBquery/query").Contact_DB;

app.get("/",(req,resp)=>{
    resp.send("hi");
    resp.sendFile(__dirname+"/public/index.html");
})
 
app.get("/ip",async (req,resp)=>{
    let params={
        url:"mongodb+srv://vihith_mongodb:"+"Cse3002"+"%40"+"iwp2022"+"@cluster0.u8fjk.mongodb.net",
        collection:"TEST",
        db:"PROJ_ISM",
        query:{name:'ram'},
        ip:req.cookies.ip,
        api:"test1"
    }
    let ans=await Contact_DB(params,MongoClient,axios);
    resp.send(ans);
})



app.listen(5000);

