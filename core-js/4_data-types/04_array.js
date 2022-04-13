// [array] https://ko.javascript.info/array
/*
    - '순서가 있는 컬렉션'을 저장하는 자료구조
    - 객체의 기본 기능 + 순서가 있는 컬렉션을 제어하는 배열 내장 메서드
    - 배열로 큐(queue)와 스택(stack) 구현 가능
    - 배열 요소의 자료형엔 제약이 없다
    - 배열 끝 : pop()/push()
    - 배열 앞 : shift()/unshift()
    - arr.length = 0;을 사용해 간단하게 배열을 비울 수 있다
 */

// Q1) 배열은 복사가 될까? ----------
// 배열은 객체이기 때문에, shoppingCart와 fruits는 같은 배열을 참조한다
let fruits = ["사과", "배", "오렌지"];
let shoppingCart = fruits; // 배열을 '복사'
shoppingCart.push("바나나");
alert(fruits.length); // 4


// Q2) 배열과 관련된 연산 ----------
let styles = ["Jazz", "Blues"]; //Jazz, Blues
styles.push("Rock-n-Roll"); //Jazz, Blues, Rock-n-Roll
styles[Math.floor((styles.length - 1) / 2)] = "Classics"; //Jazz, Classics, Rock-n-Roll
styles.shift(); //Classics, Rock-n-Roll
styles.unshift("Rap", "Reggae"); //Rap, Reggae, Classics, Rock-n-Roll


// Q3) 배열 컨텍스트에서 함수 호출하기 ----------
let arr = ["a", "b"];

arr.push(function () {
  alert(this);
}); // 배열에 마지막 요소에 함수 추가

arr[2](); // a,b,function(){...}


// Q4) 입력한 숫자의 합 ----------
const sumInput = () => {
  let numbers = [];
  let sum = 0;

  while (true) {
    let value = prompt("숫자를 입력해 주세요.", 0);

    if (value === "" || value === null || isFinite(value)) break;
    numbers.push(+value);
  }

  for (let x of numbers) sum += x;
  return sum;
};


// Q5) 최대합 부분 배열 ----------
// O(n)
const getMaxSubSum = (arr) => {
  let sum = 0;
  let temp = 0;

  for (let x of arr) {
    temp += x;
    sum = Math.max(sum, temp);
    if (temp < 0) temp = 0; //요소 전체가 음수라면 0
  }

  return sum;
};