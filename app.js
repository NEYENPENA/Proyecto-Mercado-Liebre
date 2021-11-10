const express = require('express');
const app = express()
const path = require('path');
const port = 3090;


app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/login',(req,res) => res.sendFile(path.join(__dirname,'views','login.html')));
app.get('/register',(req,res) => res.sendFile(path.join(__dirname,'views','register.html')));

app.listen(port, () => console.log("servidor funcionando en http://localhost:" + port));
