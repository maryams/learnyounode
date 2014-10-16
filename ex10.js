var net = require('net')
var portNumber = process.argv[2]
var mydate = new Date();

  var getDatey = mydate.getFullYear() + "-" + (mydate.getMonth()+1) + "-" + ("0" + mydate.getDate()).slice(-2) + " " + mydate.getHours() + ":" + mydate.getMinutes() + "\n";

var server = net.createServer(function (socket) {                              
  socket.end(getDatey)
    })

server.listen(portNumber);


/* Their answer

var net = require('net')                                                                                                                                                                     
                                                                                                                                                                                                 
    function zeroFill(i) {                                                                                                                                                                       
      return (i < 10 ? '0' : '') + i                                                                                                                                                             
    }                                                                                                                                                                                            
                                                                                                                                                                                                 
    function now () {                                                                                                                                                                            
      var d = new Date()                                                                                                                                                                         
      return d.getFullYear() + '-'                                                                                                                                                               
        + zeroFill(d.getMonth() + 1) + '-'                                                                                                                                                       
        + zeroFill(d.getDate()) + ' '                                                                                                                                                            
        + zeroFill(d.getHours()) + ':'                                                                                                                                                           
        + zeroFill(d.getMinutes())                                                                                                                                                               
    }                                                                                                                                                                                            
                                                                                                                                                                                                 
    var server = net.createServer(function (socket) {                                                                                                                                            
      socket.end(now() + '\n')                                                                                                                                                                   
    })                   */
