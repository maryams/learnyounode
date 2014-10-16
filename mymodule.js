var fs = require('fs');
var path = require('path');


module.exports = function (dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {
    if (err){
      return callback(err)
    }

    //filter creates an array
    var fList = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, fList)
  })
}