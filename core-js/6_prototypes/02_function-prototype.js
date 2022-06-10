// [function-prototype] https://ko.javascript.info/function-prototype

/*
    함수의 프로퍼티
        - 생성자 함수에 기본으로 세팅되는 프로퍼티(F.prototype)는 [[Prototype]]과 다릅니다. F.prototype은 new F()를 호출할 때 만들어지는 새로운 객체의 [[Prototype]]을 설정한다
        - F.prototype의 값은 객체나 null만 가능합니다. 다른 값은 무시된다
*/

// Q1) 'prototype' 변경하기 ----------
function Rabbit() {}
Rabbit.prototype = {
    eats: true,
};

let rabbit = new Rabbit();

/*
    Rabbit.prototype = {}; // true
    Rabbit.prototype.eats = false; // false
    delete rabbit.eats; // true : delete 연산은 객체에 직접 적용된다
    delete Rabbit.prototype.eats; // undefined
*/

alert(rabbit.eats); // true


// Q2) 동일한 생성자 함수로 객체 만들기 —————
function User(name) {
    this.name = name;
}

let user = new User("John");
let user2 = new user.constructor("Pete");

alert(user2.name); // Pete : User.prototype.constructor == User