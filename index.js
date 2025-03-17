// Importing modules in Node.js
const { EventEmitter } = require('events');
const myModule = require('./my_module');
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    fs.readFile('./page.html', 'utf8', (err,  html) => {
        if  (err) {
            res.status(500).send('sorry, out of order')
        }
        res.send(html);
    })
    })
app.listen(process.env.PORT || 3000, () => console.log("open at port 3000")
);

