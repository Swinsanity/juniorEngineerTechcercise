const res = require('express/lib/response');
const express = require('express');
const http = require('http');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 8080;
const jsonData = fs.readFileSync('transactions.json', 'utf-8')
const parsedData = JSON.parse(jsonData)
let asArray = Object.entries(parsedData)


app.use( express.json() )

app.listen(PORT, () => console.log(`It's alive! on http://localhost:${PORT}`)
);

//This route pulls all transactions
app.get('/transactions', (req, res) => {
    
    console.log(asArray);
    res.send(asArray)
    });

//Route that pulls specific tranaction based on ID number
app.get('/transactions/:id', (req, res) => {
    const results = parsedData.filter(({$id}) => $id === (req.params.id))
    if (!results) res.status(404).send("Could not find transaction")
    res.send(JSON.stringify(results))
    console.log(JSON.stringify(results))
})

