var fs = require('fs');
var path = require('path');
var pathdata = process.argv[2];
var ext = process.argv[3];

fs.readdir(pathdata, function (err, list){

    for (var i = 0; i < list.length; i++) {
      if ("." + path.extname(list[i]) === ext) {
        console.log(list[i] );
      }
    }
});