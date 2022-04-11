// [number] https://ko.javascript.info/number

// Q1) 두 수를 입력받아 덧셈하기 ----------
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");
console.log(a + b);


// Q2) 숫자를 입력할 때까지 반복하기 ----------
function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while (!isFinite(num));

  if (num === null || num === "") return null;

  return +num;
}
console.log(`Read: ${readNumber()}`);