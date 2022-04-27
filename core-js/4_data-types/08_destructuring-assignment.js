// [destructuring-assignment] https://ko.javascript.info/destructuring-assignment
/*
    [ 구조 분해 할당(destructuring assignment)] 
        - 구조 분해 할당을 사용하면 객체나 배열을 변수로 연결할 수 있다
        - 할당 연산자 좌측의 패턴과 우측의 구조가 같으면 중첩 배열이나 객체가 있는 복잡한 구조에서도 원하는 데이터를 뽑아낼 수 있다

        1. 객체 분해
            - let {prop : varName = default, ...rest} = object
                - object의 프로퍼티 prop의 값은 변수 varName에 할당되는데, object에 prop이 없으면 default가 varName에 할당된다
                - 연결할 변수가 없는 나머지 프로퍼티들은 객체 rest에 복사된다
        2. 배열 분해
            - let [item1 = default, item2, ...rest] = array
                - array의 첫 번째 요소는 item1에, 두 번째 요소는 변수 item2에 할당되고, 이어지는 나머지 요소들은 배열 rest 저장된다
*/

// Q1) 구조 분해 할당 수행 ----------
/*
  name 프로퍼티의 값을 변수 name에 할당
  years 프로퍼티의 값을 변수 age에 할당
  isAdmin 프로퍼티의 값을 변수 isAdmin에 할당
  isAdmin이라는 프로퍼티가 없으면 false를 할당  
*/
let user = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = user;
alert(name); // John
alert(age); // 30
alert(isAdmin); // false


// Q2) 최대 급여 계산기 ----------
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const topSalary = (salaries) => {
  let max = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
};