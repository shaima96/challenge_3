

const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/./public'))
app.use(express.json())

 
let port = 4000;
app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/./client/app.js')
})
app.listen(port, () => {
    console.log(`listening to port 4000`);
});