var http = require("http")
var str = ["", "", ""]
var counter = 0;

function httpGet(i) {
  http.get(process.argv[i + 2], function callback(response){
    response.setEncoding('utf8');

    response.on("data", function (data){
      str[i] += data
    });

     response.on("end", function(){
        counter ++;
        if (counter ===3){
          console.log(str[0]);
          console.log(str[1]);
          console.log(str[2]);
        }
     })
  });
}

for (var i=0; i<3; i++){
httpGet(i);
}
