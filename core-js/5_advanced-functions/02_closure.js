// [closure] https://ko.javascript.info/closure

/*
    - 코드블록 : 코드 블록 {...} 안에서 선언한 변수는 블록 안에서만 사용할 수 있다.
    - 클로저(Closure)
        - 외부 변수를 기억하고, 이 외부 변수에 접근할 수 있는 함수
        - 자바스크립트의 함수는 숨김 프로퍼티인 [[Environment]]를 이용해 자신이 어디서 만들어졌는지를 기억한다
        - 함수 본문에선 [[Environment]]를 사용해 외부 변수에 접근한다
*/


// Q1) Does a function pickup latest changes? ----------
let name = "John";
function sayHi() {
  alert("Hi, " + name);
}
name = "Pete";

sayHi(); // Pete


// Q2) Which variables are available? ----------
function makeWorker() {
  let name = "Pete";

  return function () {
    alert(name);
  };
}

let name = "John";
let work = makeWorker();

work(); // Pete


// Q3) counter는 독립적일까? ----------
/* 
    함수 counter와 counter2는 각각 다른 makeCounter 호출에 의해 만들어졌다
    두 함수는 독립적인 렉시컬 환경을 갖게 되므로, 각 함수는 자신만의 count를 갖게 된다
*/
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

alert(counter2()); // 0
alert(counter2()); // 1


// Q4) counter 객체 ----------
// 생성자 함수의 두 중첩 함수는 동일한 외부 렉시컬 환경에서 만들어졌기 때문에, 같은 count 변수를 공유한다
function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

alert(counter.up()); // 1
alert(counter.up()); // 2
alert(counter.down()); // 1


// Q5) if 문 안의 함수 ----------
/*
    sayHi는 if문 안에서 정의했기 때문에, 오직 if문 안에서만 접근할 수 있다. 
    if문 밖엔 sayHi가 없다.
*/
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); // Error!


// Q6) 클로저를 이용하여 합 구하기 ----------
// sum(a)(b) = a+b와 같은 연산을 해주는 함수 sum
function sum(a) {
  //두 번째 괄호가 제대로 동작하려면 첫 번째 괄호는 반드시 함수를 반환해야 함
  return function (b) {
    return a + b; // 'a'는 외부 렉시컬 환경에서 가져옴
  };
}
sum(1)(2); //3
sum(5)(-1); //4


// Q7) Is variable visible? ----------
let x = 1;

function func() {
  console.log(x); // ReferenceError: 초기화 전에 'x'에 액세스할 수 없음

  let x = 2;
}

func(); // Error!


// Q8) 함수를 이용해 원하는 값만 걸러내기 ----------
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function (x) {
    return arr.include(x);
  };
}

const inArray = ([]) => {};
alert(arr.filter(inBetween(3, 6))); // 3,4,5,6
alert(arr.filter(inArray([1, 2, 10]))); // 1,2


// Q9) 필드를 기준으로 정렬하기 ----------
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

users.sort(byField("name"));
users.sort(byField("age"));