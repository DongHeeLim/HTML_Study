var fs = require('fs'); //filesystem
fs.readFile('sample.txt', 'utf8', function(err, data){
  console.log(data);
});
