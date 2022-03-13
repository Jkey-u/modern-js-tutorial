// [constructor-new] https://ko.javascript.info/constructor-new
/*
    생성자 함수(constructor function)
        - 재사용할 수 있는 객체 생성 코드를 구현
        - 함수 이름의 첫 글자는 대문자로 시작한다
        - 생성자 함수는 반드시 new 연산자와 함께 호출한다
        - new와 함께 호출하면 내부에서 this가 암시적으로 만들어지고, 마지막엔 this가 반환된다
*/

// Q1) 함수 두 개로 동일한 객체 만들기 ----------
let obj = {};

function A() {
    return obj;
}

function B() {
    return obj;
}

alert(new A() == new B()); // true


// Q2) 계산기 만들기 ----------
function Calculator() {
    this.read = function () {
        this.a = +prompt("a?", 0);
        this.b = +prompt("b?", 0);
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());


// Q3) 누산기 만들기 —————
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt("더할 값을 입력해주세요.", 0);
    };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);