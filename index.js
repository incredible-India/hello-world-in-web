const express = require('express');
const app=express();
const url = require('url');
const fs = require('fs');
const chalk = require('chalk');
// var router=express.Router();

app.use(express.urlencoded({extended:true}))
app.set('view engine','pug')
app.set('views','./')
app.use(express.static('./'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/explore',(req,res)=>{
    res.render('./Allpug/explore',{
        data:{
            title:"Expolre"
        }
    })
})

app.get('/apply',(req,res)=>{
    res.render('./Allpug/applyfrom')
})

app.post('/application/submitted',(req,res)=>{
    
    fs.appendFileSync('All User Data.json',` ${JSON.stringify(req.body)}`)
    fs.appendFileSync('All User Data.txt',`\n The name is ${req.body.UserName} \n email is ${req.body.Email} , Selected language ${req.body.language} \n and the mobile number is ${req.body.Mobile}\n.......`)

    console.log(
        chalk.yellow((JSON.stringify(req.body)))
    );
    

    res.send("From Submitted")
 
    // res.render('./Allpug/applyfrom')

})


app.get('*',(req,res)=>{
    res.statusCode=404
    res.setHeader("content-type",'text/html')
    res.render('./asset/Error',{
        data:"Incorect Url Submission"
    })
})

app.listen(80,()=>{
    console.log("This Server is running at http://localhost:80");
})

