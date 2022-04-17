// [keys-values-entries] https://ko.javascript.info/keys-values-entries
/*
    1. 객체 변환하기
        - 객체엔 map, filter 같은 배열 전용 메서드를 사용할 수 없다
        - Object.entries와 Object.fromEntries를 순차적으로 적용하면 객체에도 배열 전용 메서드 사용할 수 있다
            a) Object.entries(obj)를 사용해 객체의 키-값 쌍이 요소인 배열을 얻는다
            b) a에서 만든 배열에 map 등의 배열 전용 메서드를 적용한다
            c) b에서 반환된 배열에 Object.fromEntries(array)를 적용해 배열을 다시 객체로 되돌린다
*/

// Q1) 프로퍼티 값 더하기 ----------
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const sumSalaries = (salaries) => {
  let sum = 0;
  Object.values(salaries).map((sal) => (sum += sal));
  return sum;
};
sumSalaries(salaries); //// 650


// Q2) 프로퍼티 개수 세기 ----------
let user = {
  name: "John",
  age: 30,
};

const count = (user) => {
  return Object.values(user).length;
};
count(user); //2
