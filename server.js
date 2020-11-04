

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { first, second, third } = require('./database');

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/./public'))
app.use(express.json())


let port = 4001;
app.get("/app", (req, res) => {
    res.sendFile(__dirname + '/./compiled/client/app.js');
})


// app.get("/form1", (req, res) => {
//     res.sendFile(__dirname + '/./compiled/client/form1.js');
// })
// app.get("/form2", (req, res) => {
//     res.sendFile(__dirname + '/./compiled/client/form2.js');
// })
// app.get("/form3", (req, res) => {
//     res.sendFile(__dirname + '/./compiled/client/form3.js');
// })




app.post('/', (req, res) => {
    var result = req.body;

    var firstForm = {
        name: result.name,
        email: result.email,
        password: result.password

    }
    var secondForm = {
        line1: result.line1,
        line2: result.line2,
        city: result.city,
        state: result.state,
        code: result.code
    }
    var thirdFoerm = {
        credit: result.credit,
        date: result.date
    }

    var first = new first(firstForm);
    first.save();
    var second = new first(secondForm);
    second.save();
    var third = new first(thirdFoerm);
    third.save();

    res.send(result);
    console.log("fff", res.send(result))
})

app.listen(port, () => {
    console.log(`listening to port 4000`);
});