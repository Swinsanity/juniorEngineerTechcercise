//I found a REST API seemed to be the way to go for this exercise so I built one using Express JS

const res = require('express/lib/response');
const express = require('express');
const http = require('http');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 8080;
const jsonData = fs.readFileSync('transactions.json', 'utf-8');
const parsedData = JSON.parse(jsonData);
const asArray = Object.entries(parsedData);


app.use( express.json() );

app.listen(PORT, () => console.log(`It's alive! on http://localhost:${PORT}`)
);

//This route pulls all transactions
app.get('/transactions', (req, res) => {
    
    res.send(asArray);
    console.log(asArray);
    });

//Route that pulls specific tranaction based on ID number
app.get('/transactions/:id', (req, res) => {
    const results = parsedData.filter(({$id}) => $id === (req.params.id))
    if (!results) res.status(404).send("Could not find transaction")

    const resultArray = Object.entries(results) //This made it look nicer in my opinion

    res.send(resultArray);
    console.log(resultArray);
});

//Route that pulls specific tranaction based on SPECIFIC account number
app.get('/transactions/search/:accountNumber', (req, res) => {
    const results = parsedData.filter(({AccountNumber}) => AccountNumber === (req.params.accountNumber)) //Would like to filter this more so that we can ignore leading zeroes
    if (!results) res.status(404).send("Could not find transaction")
    
    const resultArray = Object.entries(results)
    
    res.send(resultArray);
    console.log(resultArray);;
});

