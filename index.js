var res = require('express/lib/response');


var express = require('express');
var app = express();
var fs = require('fs');
var PORT = 8080;

app.use( express.json() )

app.get('/getTransactions', (req, res) => {
    fs.readFile("transactions.json", 'utf-8', function(err, data){
        console.log(data)
        res.end(data);

    })
});
        

//     res.sendFile(path.join(juniorEngineerTechcercise, './transactions.json'));
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

app.listen(
    PORT,
    () => console.log(`it's alive! on http://localhost:${PORT}`)
);