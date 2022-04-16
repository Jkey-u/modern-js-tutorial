// [map-set] https://ko.javascript.info/map-set
/*
    1. 맵(Map)
        - 맵(Map)은 키가 있는 데이터를 저장한다는 점에서 객체와 유사하지만, 키에 다양한 자료형을 허용한다는 점이 다르다.
        - map을 사용할 땐 map전용 메서드 set, get 등을 사용해야 한다
    
    2. 셋(Set)
        - 셋(Set)은 '중복을 허용하지 않는' 값을 모아놓은 특별한 컬렉션
        - 셋에 키가 없는 값이 저장된다
*/

// Q1) 배열에서 중복 요소 제거하기 ----------
let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

function unique(arr) {
  return Array.from(new Set(arr));
}
unique(values); //Hare, Krishna, :-O


// Q2) 애너그램 걸러내기 ----------
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const aclean = (arr) => {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }
  return Array.from(map.values());
};
aclean(arr); //PAN,cheaters,era


// Q3) 반복 가능한 객체의 키 ----------
let map = new Map();

map.set("name", "John");

// let keys = map.keys();
// keys.push가 동작하지 않은 이유는 map.keys()가 배열이 아니라 이터러블을 반환하기 때문!
// Array.from을 이용하면 맵을 배열로 변환할 수 있다.
let keys = Array.from(map.keys());

// Error: keys.push is not a function
keys.push("more");
