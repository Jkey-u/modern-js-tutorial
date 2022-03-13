// [object] https://ko.javascript.info/object
/*
    [ "key" in obj ] 해당 key를 가진 프로퍼티가 객체 내에 있는지 확인하고자 할 때
    [ for(let key in obj) ] 프로퍼티를 나열할 때 (객체의 모든 키를 순회)
*/

// Q1) 객체야 안녕? ----------
const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


// Q2) 객체가 비어있는지 확인 ----------
// 객체에 프로퍼티가 하나도 없는 경우 true, 그렇지 않은 경우 false를 반환해주는 함수
const isEmpty = (obj) => {
    for (let key in obj) {
        // if the loop has started, there is a property
        return true;
    }
    return false;
};


// Q3) const와 함께 선언한 객체를 변경하는 게 가능할까? ----------
const user = {
    name: "John",
};
// const는 한 번이라도 값을 할당한 변수가 변경되는 걸 막는다.
// 변수 user는 객체 참조 값을 저장하고 있는데, const는 이 값이 변경되는걸 막는 것이지, 객체의 내용(프로퍼티)을 변경하는 건 막지 않는다.
user.name = "Pete"; // works
user = 123; // error


// Q4) 프로퍼티 합계 구하기 ----------
// 모든 팀원의 월급을 합한 값을 구하고, 그 값을 변수 sum에 저장해주는 코드를 작성
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
alert(sum); //390


// Q5) 프로퍼티 값 두 배로 부풀리기 ----------
// 객체 obj의 프로퍼티 값이 숫자인 경우 그 값을 두 배 해주는 함수 multiplyNumeric(obj)
// 함수 호출 전
const multiplyNumeric = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2;
        }
    }
};