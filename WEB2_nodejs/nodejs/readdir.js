// 파일 리스트 배열로 전달

const testFolder = './data';
const fs = require('fs');

fs.readdir(testFolder, function(err, filelist){
  console.log(filelist);
});
