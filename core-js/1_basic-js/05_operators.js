// [기본 연산자] https://ko.javascript.info/operators

// Q1) 전위형과 후위형
let a = 1,
  b = 1;
let c = ++a; // c: 2
let d = b++; // d: 1

// Q2) 할당 후 결과 예측
let a = 2;
let x = 1 + (a *= 2); // a: 4, x: 5

// Q3) 형 변환
"" + 1 + 0; // 1
"" - 1 + 0; // -1
true + false; // 1
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // 9px
"$" + 4 + 5; // $45
"4" - 2; // 2
"4px" - 2; // NaN
7 / 0; // Infinity
"  -9  " + 5; //   -9  5 : 피 연산자 중 하나가 문자열이므로 숫자 5가 문자열로 변환된다
"  -9  " - 5; // -14 : 뺄셈 연산자는 인수를 숫자형으로 변환
null + 1; // 1 : 숫자형으로 변환 시 null은 0이 된다
undefined + 1; // NaN : undefined는 숫자형으로 변환시 NaN이 된다
" \t \n" - 2; // -2

// Q4) 덧셈 고치기 - 결과가 3이 되도록
let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
let b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);
alert(+a + +b); // 3
