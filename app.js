const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const path = require("path");
var fs = require('fs');
const readline = require('readline');
var cors = require('cors');


app.use(cors())
app.set('views','./views');
app.set('view engine','ejs');
app.use(express.json()); 
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/')));

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.render('index');
});



app.listen(port,()=>{
    console.log('Server is running on 127.0.0.1:'+port)
});