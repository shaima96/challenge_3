

const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/./public'))
app.use(express.json())

 
let port = 4000;
app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/./compiled/client/app.js')
})

// app.post('/form1',(req,res)=>{
//     var name=req.body.name;
//     var email=req.body.email;
//     var password=req.body.password;

// })

// app.post('/form2',(req,res)=>{
//     var line1=req.body.line1;
//     var line2=req.body.line2;
//     var city=req.body.city;
//     var state=req.body.state;
//     var code=req.body.code;

// })

app.listen(port, () => {
    console.log(`listening to port 4000`);
});