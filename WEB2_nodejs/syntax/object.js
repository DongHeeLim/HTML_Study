// 배열, 객체는 연관된 데이터를 담는 그릇
// 처리방법을 Grouping 한 statement(구문)는 data -> 배열과 객체에 담을 수 있음
// 함수는 값
var f = function(){
  console.log(1+1);
  console.log(1+2)
}

var a = [f];
a[0]();

// 프로퍼티
var object = {
  func:f
}

object.func();
