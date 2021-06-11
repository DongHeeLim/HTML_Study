// Template literal
// 자바스크립트 문자열 입력 방식
// 쉽게 문자열과 변수를 함께 사용할 수 있음
// 런타임 시점 자바스크립트 문자열로 변환/처리됨

var name = "LEE"
var string = 'I am great ' +name+' \
\
that buys everything in the world.';
console.log(string);
var string = `I am great ${name}

that buys every${1+2}thing in the world.`;    //백틱(back-tick), 억음부호, grave accent
console.log(string);
