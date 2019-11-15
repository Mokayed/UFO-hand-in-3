var fetch = require("node-fetch");
const perf = require('execution-time')();

fetch('http://localhost:3000/server',{method: "POST", body:JSON.stringify({message: 'hello from client'}), headers:{"content-type" : "application/json"}})
  .then((response)=>{  
      return response.json();
  }).then((json)=>{
    perf.start();
console.log(json);
const results = perf.stop();
console.log("It took: "+ results.time+ "ms"); 
  })