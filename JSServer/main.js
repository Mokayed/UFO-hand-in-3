var express = require("express");
var bodyparser = require("body-parser");
const perf = require('execution-time')();

var app = express();
app.use(bodyparser.json());

app.listen(3000, () => {
 console.log("Server running on port 3000");
});


app.post("/server", (req, res) => {
    perf.start();
    console.log(req.body)
    const results = perf.stop();
console.log("It took: "+ results.time+ "ms"); 

    res.json("server resived the message");
   });