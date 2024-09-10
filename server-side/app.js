const express=require('express');
const manage=require('./routers/manage');
const app=express();

app.get('/',(req,res)=>{
    res.status(200).send('hello to our server');
});


app.use('/manage',manage);


app.get('/*',(req,res)=>{
    res.status(400).send('error');
});

module.exports=app;