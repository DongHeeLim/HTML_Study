/*function a(){
  console.log('A');
}*/
var a = function(){
  console.log('A');
} //변수 a에 함수 넣음
//a();

function slowfunc(callback){
  callback();   // 끝나면 연락하는 a=callback 실행 
}

slowfunc(a);  // 위 callback parameter에 a 넣음
