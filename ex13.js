var http = require('http');
var portNumber = process.argv[2];
var url = require('url')

var server = http.createServer(function callback(request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  
  var pathn = url.parse(request.url, true).pathname
  var keyn = url.parse(request.url, true).query.iso
  var isoy = url.parse(request.url, true)
  
  if (request.method !== "GET"){
    return response.write("not a GET");
  }
  
  var firstDate = new Date(keyn)
  var hotDate = {
    hour: firstDate.getHours(),
    minute: firstDate.getMinutes(),
    second: firstDate.getSeconds()
  }
  
  var uTime = firstDate.getTime()
  
  var lastDate = {
    unixtime: uTime
  }
  
  if (pathn === "/api/parsetime"){
      response.end(JSON.stringify(hotDate))
  }
  
  if (pathn === "/api/unixtime"){
      response.end(JSON.stringify(lastDate))
  }
  
  response.end(
    console.log()
  );
  
})
server.listen(portNumber);


/*
var http = require('http')                                                                                                                                                                   
    var url = require('url')                                                                                                                                                                     
                                                                                                                                                                                                 
    function parsetime (time) {                                                                                                                                                                  
      return {                                                                                                                                                                                   
        hour: time.getHours(),                                                                                                                                                                   
        minute: time.getMinutes(),                                                                                                                                                               
        second: time.getSeconds()                                                                                                                                                                
      }                                                                                                                                                                                          
    }                                                                                                                                                                                            
                                                                                                                                                                                                 
    function unixtime (time) {                                                                                                                                                                   
      return { unixtime : time.getTime() }                                                                                                                                                       
    }                                                                                                                                                                                            
                                                                                                                                                                                                 
    var server = http.createServer(function (req, res) {                                                                                                                                         
      var parsedUrl = url.parse(req.url, true)                                                                                                                                                   
      var time = new Date(parsedUrl.query.iso)                                                                                                                                                   
      var result                                                                                                                                                                                 
                                                                                                                                                                                                 
      if (/^\/api\/parsetime/.test(req.url))                                                                                                                                                     
        result = parsetime(time)                                                                                                                                                                 
      else if (/^\/api\/unixtime/.test(req.url))                                                                                                                                                 
        result = unixtime(time)                                                                                                                                                                  
                                                                                                                                                                                                 
      if (result) {                                                                                                                                                                              
        res.writeHead(200, { 'Content-Type': 'application/json' })                                                                                                                               
        res.end(JSON.stringify(result))                                                                                                                                                          
      } else {                                                                                                                                                                                   
        res.writeHead(404)                                                                                                                                                                       
        res.end()                                                                                                                                                                                
      }                                                                                                                                                                                          
    })                                                                                                                                                                                           
    server.listen(Number(process.argv[2])) 
    */
