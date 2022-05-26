const res = require('express/lib/response');
const express = require('express');
const http = require('http');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 8080;
const jsonData1 = fs.readFileSync('transactions.json', 'utf-8')
const parsedData1 = JSON.parse(jsonData1)
const jsonData2 = fs.readFileSync('oneTransaction.json', 'utf-8')
const parsedData2 = JSON.parse(jsonData2)

app.use( express.json() )

app.listen(PORT, () => console.log(`It's alive! on http://localhost:${PORT}`)
);

app.get('/transactions', (req, res) => {
    
    console.log(parsedData1);
    res.send(parsedData1)
    });

// app.get('/transactions/:id', (req, res) => {
//     const transactions = parsedData1.filter(({Id}) => Id === (req.params.id));
//     if (!transactions) res.status(404).send('Could not find transaction')

// });

app.get('/transactions/:id', (req, res) => {
    const transactions = parsedData2.filter(({Id}) => Id === (req.params.id));
    if (!transactions) res.status(404).send('Could not find transaction')

});