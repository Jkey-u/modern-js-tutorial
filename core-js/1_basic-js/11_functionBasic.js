// [function-basics] https://ko.javascript.info/function-basics
/*
    함수에 전달된 매개변수는 복사된 후 함수의 지역변수가 된다
    함수는 외부 변수에 접근할 수 있지만, 함수 외부에서 함수 내부의 지역변수에 접근하는 건 불가능하다
    함수는 값을 반환할 수 있다. 값을 반환하지 않는 경우는 반환 값이 undefined
*/

// Q1) '?'나 '||'를 사용하여 함수 다시 작성 ----------
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("보호자의 동의를 받으셨나요?");
  }
}
// 1-1. 물음표 연산자 ?를 사용
function checkAge(age) {
  return age > 18 ? true : confirm("보호자의 동의를 받으셨나요?");
}
// 1-2. OR 연산자 ||를 사용
function checkAge(age) {
  return age > 18 || confirm("보호자의 동의를 받으셨나요?");
}


// Q2) min(a, b) 함수 만들기 ----------
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function min(a, b) {
  return a < b ? a : b;
}


// Q3) pow(x,n) 함수 만들기 ----------
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
  alert(`${n}은 양의 정수이어야 합니다.`);
} else {
  alert(pow(x, n));
}