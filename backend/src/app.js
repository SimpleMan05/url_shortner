import express from 'express'

const app = express();

app.get('/', (req,res)=>{
    res.end("Welcome to URL Shortner");
});

import healthcheckRouter from './routes/healthcheck.route.js'

app.use('/api/v1/health', healthcheckRouter);

export {app}