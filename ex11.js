var http = require('http');
var fs = require('fs');
var portNumber = process.argv[2];
var location = process.argv[3];

var stream = fs.createReadStream(location);

var server = http.createServer(function callback(request, response) {                                                                                     
  
  response.writeHead(200, { 'content-type': 'text/plain'})
  
  stream.pipe(response);
    })

server.listen(portNumber);

/* Official

var http = require('http')                                                                                                                                                                   
    var fs = require('fs')                                                                                                                                                                       
                                                                                                                                                                                                 
    var server = http.createServer(function (req, res) {                                                                                                                                         
      res.writeHead(200, { 'content-type': 'text/plain' })                                                                                                                                       
                                                                                                                                                                                                 
      fs.createReadStream(process.argv[3]).pipe(res)                                                                                                                                             
    })                                                                                                                                                                                           
                                                                                                                                                                                                 
    server.listen(Number(process.argv[2]))    
    
    */