import express from 'express'

const app = express();
app.get('/status',(req,res)=>{
res.status(200).end();
});
app.get('/',(req,res)=> {

    res.status(200);
    res.set('Content-type','text/html');
    res.send('<h1> premiere route test </h1>');
    
});

export default app;

