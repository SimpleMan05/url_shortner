import express from 'express'

const app = express();

app.get('/', (req,res)=>{
    res.end("Welcome to URL Shortner");
});


export {app}