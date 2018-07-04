const express = require('express')
var bodyParser = require('body-parser')
const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'codekul-project';
let mongoDbObj = null

MongoClient.connect(url, function(err, client) {
    console.log("Connected successfully to server");
  
    const db = client.db(dbName);
    mongoDbObj = db
  });

const app = express()
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.json())

let jsOb = {
    nm: 'android',
    ad: 78
}
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/app', (req, res) => res.send('You hit the app'))
app.get('/json', (req, res) => res.json(jsOb))

app.post('/flDt', (req, res) => {
    console.log(req.body.dt)
    res.json(req.body)
})

app.get('/rtPrm/:usId', (req, res) => {
    console.log(req.params.usId)
    res.json(req.params)
})

app.post(`/reg`, (req, res)=>{
    let codeUsers = mongoDbObj.collection(`codeUsers`)

    let svObj = {
        userName : req.body.usNm,
        pass : req.body.pass,
        email : req.body.eml
    }
    codeUsers.insert(svObj, (err, result)=>{
        assert.equal(err, null);

        res.json({sts: `success`, msg:`Data saved successfully`})
     } )
})
app.get(`/regs`, (req, res)=>{
    let codeUsers = mongoDbObj.collection(`codeUsers`)
    codeUsers.find({}).toArray((err, results)=>{
        assert.equal(err, null);
        res.json(results)
        
    })
})

app.listen(
    3000,
    () => console.log('Example app listening on port 3000!')
)