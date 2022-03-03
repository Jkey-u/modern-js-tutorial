// [while과 for 반복문] https://ko.javascript.info/while-for
/* 
    반복문 앞에 레이블을 붙이고 내부 반복문에서 break/continue를 사용하면,
    중첩 반복문을 빠져나올 수 있다.
*/

// Q1) 반복문의 마지막 값 ----------
let i = 3;

while (i) {
  alert(i--); // 3, 2, 1
}


// Q2) while 반복문의 출력값 예상 ----------
let i = 0;
while (++i < 5) alert(i); // 1, 2, 3, 4

let i = 0;
while (i++ < 5) alert(i); // 1, 2, 3, 4, 5


// Q3) for 반복문의 출력값 예상 ----------
for (let i = 0; i < 5; i++) alert(i); // 0, 1, 2, 3, 4
for (let i = 0; i < 5; ++i) alert(i); // 0, 1, 2, 3, 4


// Q4) for 반복문을 이용하여 짝수 출력 (2 ~ 10) ----------
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) alert(i);
}


// Q5) 'for' 반복문을 'while' 반복문으로 바꾸기 ----------
for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}


// Q6) 사용자가 유효한 값을 입력할 때까지 프롬프트 창 띄우기 ----------
let value;

do {
  value = +prompt("100보다 큰 숫자를 입력하세요.", "");
} while (value <= 100 || value === "");


// Q7) 소수 출력하기 (2 ~ n) ----------
let n = 10;

nextPrime: for (let i = 2; i < n; i++) {
  for (let j = 2; j < i; i++) { //제수(나눗수) 찾기
    if (i % j == 0) continue nextPrime;
  }
  alert(i); //소수
}