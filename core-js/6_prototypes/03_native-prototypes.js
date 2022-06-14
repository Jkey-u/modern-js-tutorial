// [native-prototypes] https://ko.javascript.info/native-prototypes

/*
    - 모든 내장 객체는 다음과 같은 규칙을 따른다
        - 메서드는 프로토타입에 저장된다 (Array.prototype, Object.prototype, Date.prototype 등)
        - 객체 자체엔 데이터만 저장한다 (배열의 요소, 객체의 프로퍼티, 날짜 등)
    - 원시값 또한 래퍼 객체의 프로토타입에 Number.prototype, String.prototype, Boolean.prototype 같은 메서드를 저장한다
        - 다만 undefined와 null은 예외
    - 내장 프로토타입은 수정 가능, 내장 프로토타입의 메서드를 빌려와 새로운 메서드를 만드는 것 역시 가능
        - 그러나 내장 프로토타입 변경은 되도록 지양
        - 내장 프로토타입은 새로 명세서에 등록된 기능을 사용하고 싶은데 자바스크립트 엔진엔 이 기능이 구현되어있지 않을 때만 변경하는 게 좋다
*/

// Q1) 메서드"f.defer(ms)"를 함수에 추가하기 ----------
// 모든 함수의 프로토타입에 ms밀리초 후에 함수를 실행하는 defer(ms)함수를 추가
Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
};

function f() {
    alert("Hello!");
}

f.defer(1000); // 1초 후 "Hello!" 출력


// Q2) 데코레이팅 "defer()"를 함수에 추가하기 ----------
// 모든 함수의 프로토타입에 ms 밀리세컨초 지연 호출 래퍼를 반환하는 defer(ms) 메서드를 추가
Function.prototype.defer = function (ms) {
    let f = this;
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    };
};

function f(a, b) {
    alert(a + b);
}

f.defer(1000)(1, 2); // 1초 후 3을 출력