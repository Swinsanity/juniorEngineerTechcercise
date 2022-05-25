var res = require('express/lib/response');


var express = require('express');
var app = express();
var PORT = 8080;

app.use( express.json() )

// app.get('./transactions.json', (req, res) => {
//     console.log(res)

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
)