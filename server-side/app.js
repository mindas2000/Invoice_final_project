const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.status(200).send('hello to our server');
})

app.get('/*',(req,res)=>{
    res.status(400).send('error');
})

module.exports=app;