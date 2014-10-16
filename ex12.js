var http = require('http');
var fs = require('fs');
var portNumber = process.argv[2];
var map = require('through2-map')

var server = http.createServer(function callback(request, response) {
  response.writeHead(200, { 'content-type': 'text/plain'})
  
  if (request.method != 'POST'){
    return response.write('not a POST\n')
  }
  
  request.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(response)

})

server.listen(portNumber);

/* var http = require('http')                                                                                                                                                                   
    var map = require('through2-map')                                                                                                                                                            
                                                                                                                                                                                                 
    var server = http.createServer(function (req, res) {                                                                                                                                         
      if (req.method != 'POST')                                                                                                                                                                  
        return res.end('send me a POST\n')                                                                                                                                                       
                                                                                                                                                                                                 
      req.pipe(map(function (chunk) {                                                                                                                                                            
        return chunk.toString().toUpperCase()                                                                                                                                                    
      })).pipe(res)                                                                                                                                                                              
    })                                                                                                                                                                                           
                                                                                                                                                                                                 
    server.listen(Number(process.argv[2]))   */    