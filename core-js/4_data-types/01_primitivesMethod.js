// [primitives-methods] https://ko.javascript.info/primitives-methods
/*
  - 'null’과 'undefined’를 제외한 원시값에 다양한 메서드를 호출할 수 있다
  - 원시값에 메서드를 호출하려 하면 임시 객체가 만들어진다
  - 자바스크립트 엔진은 내부 최적화가 잘 되어있어 메서드를 호출해도 많은 리소스를 쓰지 않는다
*/

// Q) 의도한 대로 문자열(str)에 프로퍼티(test)를 추가할 수 있을까? ----------
/* 
 - str의 프로퍼티에 접근하려 하면 "래퍼 객체"가 만들어진다.
 - 엄격 모드에선 래퍼 객체를 수정하려 할 때 에러가 발생한다.
 - 비 엄격 모드에선 에러가 발생하지 않는다. 래퍼 객체에 프로퍼티 test가 추가된다. 그런데 래퍼 객체는 바로 삭제되기 때문에 마지막 줄이 실행될 땐 프로퍼티 test를 찾을 수 없다.
*/
let str = "Hello";
str.test = 5;

alert(str.test); // [엄격모드] error | [비엄격모드] undefined