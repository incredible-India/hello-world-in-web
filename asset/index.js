const express = require('express');
const app =express();

app.set('view engine','pug')
app.set('views','./')
// app.use(express.urlencoded({extended:false}))

app.get("/hello",(req,res)=>{

res.send("Hello eror ")

})
app.get('*',(req,res)=>{
    res.render('Error',{
        data:req.url
    })

})

app.listen(404,"127.0.0.1",()=>{
    console.log("Port 404 ,Server Response At http://127.0.0.1:404");
})