// [변수와 상수] https://ko.javascript.info/variables

// Q1) 변수 가지고 놀기
let admin, name;
name = "John";
admin = name;
console.log(admin); //John

// Q2) 올바른 이름 사용하기
let ourPlanetName = "Earth"; // 현재 우리가 살고있는 행성(planet)의 이름을 값으로 가진 변수
let currentUserName = "John"; // 현재 접속 중인 사용자(user)의 이름(name)을 저장하는 변수

// Q3) 대문자 상수 올바르게 사용하기
const BIRTHDAY = "01.01.2022"; // 대문자 상수는 ‘하드 코딩한’ 값의 별칭을 만들 때 주로 사용한다 ( 실행 전에 이미 값을 알고 있고, 코드에서 직접 그 값을 쓰는 경우 )
const age = someCode(BIRTHDAY); // age는 런타임에 평가된다
