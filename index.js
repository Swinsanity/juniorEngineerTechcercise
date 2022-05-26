const res = require('express/lib/response');
const express = require('express');
const http = require('http');
const app = express();
const fs = require('fs');
const PORT = 8080;

app.use( express.json() )

app.listen(
    PORT,
    () => console.log(`It's alive! on http://localhost:${PORT}`)
);

app.get('/getTransactions', (req, res) => {
    fs.readFile("transactions.json", 'utf-8', function(err, data){
        console.log(data)
        res.end(data);

    })
});

app.get('/getFirstTransaction', (req, res) => {
    
    fs.readFile("transactions.json", 'utf-8', (err, jsonString) => {
        if (err) {
            console.log(err);
        } else {
            try {
                var data = JSON.parse(JSON.stringify(jsonString));
                console.log(data.Id)
                res.send(data.Id)
            } catch (err) {
                console.log('Error parsing JSON', err);
            }
            
        }
    })
});

// app.get('/getTransactions/:id', (req, res) => {
//     var { id } = req.params
    
//     fs.readFile("transactions.json", 'utf-8', (err, jsonString) => {
//         if (err) {
//             console.log(err);
//         } else {
//             try {
//                 var data = JSON.parse(jsonString);
//                 if (data.Id === id) {
//                     return data
//                 }
//             } catch (err) {
//                 console.log('Error parsing JSON', err);
//             }
            
//         }
//     })
// });

// app.get('/tshirt', (req, res) => {
//     res.status(200).send({
//         tshirt: '👕',
//         size: 'large'
//     })
// })

// app.post('/tshirt/:id', (req, res) => {
//     const { id } = req.params;
//     const { logo } = req.body;

//     if (!logo) {
//         res.status(418).send({ message: 'We need a logo!'})

//     }

//     res.send({
//         tshirt: `👕 with your ${logo} and ID of ${id}`,
//     });
// });
