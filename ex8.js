var http = require("http")
var url = process.argv[2]

http.get(url, function callback(response){
  response.setEncoding('utf8');
  
  var str = "";
  
  response.on("data", function (data){
    str += data;
  });
    
   response.on("end", function(){
     console.log(str.length)
     console.log(str)
   })
   
});

/* Their answer

var http = require('http')                                                                                                                                                                   
    var bl = require('bl')                                                                                                                                                                       
                                                                                                                                                                                                 
    http.get(process.argv[2], function (response) {                                                                                                                                              
      response.pipe(bl(function (err, data) {                                                                                                                                                    
        if (err)                                                                                                                                                                                 
          return console.error(err)                                                                                                                                                              
        data = data.toString()                                                                                                                                                                   
        console.log(data.length)                                                                                                                                                                 
        console.log(data)                                                                                                                                                                        
      }))                                                                                                                                                                                        
    }) */