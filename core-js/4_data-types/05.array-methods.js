// [array-methods] https://ko.javascript.info/array-methods
/*
    1. 요소 추가·제거
        1-1. splice()
            - splice(index, deleteCount, elem1, elem2, ...);
            - 요소 추가·제거·교체 모두 가능
            - deleteCount를 0으로 설정하면, 요소를 제거하지 않으면서 새로운 요소를 추가할 수 있다
        1-2. slice()
            - slice(start, end);
            - start 인덱스부터 end 인덱스까지의 요소를 복사한 새로운 (부분)배열을 반환
        1-3. concat()
            - arr.concat(arg1, arg2);
            - arr에 속한 모든 요소와 arg1, arg2 등에 속한 모든 요소를 한데 모은 새로운 배열을 반환
            - 인수 갯수 제한 없음


    2. 반복작업(forEach)
        - arr.forEach(function(item, index, array) {
              // ...
          });
        - 주어진 함수를 배열 요소 각각에 대해 실행할 수 있게 해준다
        
    
    3. 배열탐색
          3-1. indexOf / lastIndexOf / includes
            - from부터 시작해 item(요소)을 찾음
                - arr.indexOf(item, from) : item을 발견하면 해당 요소의 인덱스를 반환하고, 발견하지 못했으면 -1을 반환
                - arr.lastIndexOf(item, from) : 검색을 끝에서부터 시작한다
                - arr.includes(item, from) : 해당하는 item을 발견하면 true를 반환 (존재 여부만 확인할 경우)
          3-2. find / findIndex
            - let results = arr.find(item => 조건);
                - true가 반환되면 반복이 멈추고 해당 요소를 반환 (findIndex는 인덱스를 반환)
                - 조건에 해당하는 요소가 없으면 undefined를 반환 (findIndex는 -1을 반환)
          3-3. filter
            - let results = arr.filter(item => 조건);
                - 조건에 맞는 요소 전체를 담은 배열을 반환
    

    4. 배열변형
        4-1. map()
            - let results = arr.map(item => item.length);
            - 배열 요소 전체를 대상으로 함수를 호출하고, 결과를 배열로 반환
        4-2. sort(fn)
            - arr.sort( (a, b) => a - b );
            - 배열의 요소를 정렬 (배열 자체가 변경)
            - 정렬 함수 fn을 만들고 이를 인수로 넘겨준다
        4-3. reverse()
            - arr.reverse()
            - 배열의 요소를 역순으로 정렬시키고, 정렬된 배열을 반환
        4-4. split() / join()
            - str.split(delim)
                - 구분자(delim)를 기준으로 문자열을 쪼갬
                - str.split('') : 문자열을 글자 단위로 분리
            - arr.join(glue)
                - 배열의 요소를 모두 합친 후, 하나의 문자열을 반환
        4-5. reduce() / reduceRight()
*/

// Q1) 대시(-)로 구분한 문자열을 카멜 표기법을 사용한 문자열로 변경 ----------
const camelize = (str) => {
  return str
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
};
camelize("background-color");


// Q2) 특정 범위에 속하는 요소 찾기 ----------
const filterRange = (arr, a, b) => {
  return arr.filter((item) => a <= item && item <= b);
};

let arr = [5, 3, 8, 1];
filterRange(arr, 1, 4);


// Q3) 특정 범위에 속하는 요소 찾기(배열 변경하기) ----------
const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    //범위 밖의 요소를 제거
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
};

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);


// Q4) 내림차순으로 정렬 ----------
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);

alert(arr); // 8, 5, 2, 1, -10


// Q5) 배열 복사본을 정렬 ----------
const copySorted = (arr) => {
  return arr.slice().sort(); //문자열 배열의 복사 + 정렬
};

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (no changes)


// Q6) 확장 가능한 계산기 ----------
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  //새로운 연산 추가
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}


// Q7) 이름 매핑하기 ----------
let names = users.map((user) => user.name);


// Q8) 객체 매핑하기 ----------
// 중괄호 {를 만나면 자바스크립트는 이를 객체의 시작이라 인식하지 않고 함수 본문이 시작되는 것이라 인식한다. 소괄호를 사용하면 이를 피할 수 있다.
let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));


// Q9) 나이를 기준으로 객체 정렬 ----------
sortByAge = (users) => {
  users.sort((a, b) => a.age - b.age);
};


// Q10) 평균 나이 구하기 ----------
const getAverageAge = (users) => {
  let sum = users.reduce((prev, user) => prev + user.age, 0);
  return sum / users.lengt;
};


// Q11) 중복 없는 요소 찾아내기 ----------
const unique = (arr) => {
  let result = [];

  for (let x of arr) {
    if (!result.includes(x)) {
      result.push(x);
    }
  }
  return result;
};