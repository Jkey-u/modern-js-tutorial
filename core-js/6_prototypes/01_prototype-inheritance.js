// [prototype-inheritance] https://ko.javascript.info/prototype-inheritance

/* 
    프로토타입 상속
        - 자바스크립트의 모든 객체엔 숨김 프로퍼티 [[Prototype]]이 있다 (이 프로퍼티는 객체나 null을 가리킴)
        - obj.__proto__를 사용하면 프로토타입에 접근할 수 있다
        - [[Prototype]]이 참조하는 객체를 '프로토타입’이라고 한다
        - 객체에서 프로퍼티를 읽거나 메서드를 호출하려는데 해당하는 프로퍼티나 메서드가 없으면, 자바스크립트는 프로토타입에서 프로퍼티나 메서드를 찾는다
        - 접근자 프로퍼티가 아닌 데이터 프로퍼티를 다루고 있다면, 쓰기나 지우기와 관련 연산은 프로토타입을 통하지 않고 객체에 직접 적용된다
        - 프로토타입에서 상속받은 method라도 obj.method()를 호출하면 method 안의 this는 호출 대상 객체인 obj를 가리킨다
        - for..in 반복문은 객체 자체에서 정의한 프로퍼티뿐만 아니라 상속 프로퍼티도 순회 대상에 포함한다
            - 반면, 키-값과 관련된 내장 메서드 대부분은 상속 프로퍼티는 제외하고 객체 자체 프로퍼티만을 대상으로 동작한다
*/

// Q1) 프로토타입 이해하기 ----------
let animal = {
    jumps: null,
};
let rabbit = {
    __proto__: animal,
    jumps: true,
};

alert(rabbit.jumps); // ? (1) true (from rabbit)
delete rabbit.jumps;

alert(rabbit.jumps); // ? (2) null (from animal)
delete animal.jumps;

alert(rabbit.jumps); // ? (3) undefined


// Q2) 검색 알고리즘 ----------
// 프로퍼티 조회가 pockets → bed → table → head의 경로를 따르도록 변경
// pockets.pen은 table에 있는 3, bed.glasses는 head에 있는 1이 되어야 한다
let head = {
    glasses: 1,
};

let table = {
    pen: 3,
    __proto__: head,
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
};

let pockets = {
    money: 2000,
    __proto__: bed,
};


// Q3) 어디에 프로퍼티가 추가될까? ----------
// rabbit.eat()을 호출했을 때, animal과 rabbit 중 어떤 객체에 full 프로퍼티가 생길까?
let animal = {
    eat() {
        this.full = true;
    },
};

let rabbit = {
    __proto__: animal,
};

rabbit.eat(); // 점 앞에 있는 객체는 this이기 때문에, rabbit.eat()은 rabbit을 변경


// Q4) 왜 햄스터 두 마리 모두 배가 꽉 찼을까? ----------
/*
    1. 메서드 speedy.eat은 프로토타입 hamster에서 발견되는데, 점 앞엔 객체 speedy가 있으므로 this엔 speedy가 할당되어 메서드가 실행된다
    2. this.stomach.push()를 실행하려면 프로퍼티 stomach을 찾아서 여기에 push를 호출해야 한다. 그런데 this인 speedy엔 프로퍼티 stomach이 없다
    3. stomach을 찾기위해 프로토타입 체인을 거슬러 올라가보니 hamster에 stomach이 있는것을 발견힌다
    4. push 메서드는 프로토타입 hamster에 있는 stomach 을 대상으로 동작하여 프로토타입에 food가 추가된다
*/
let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    },
};

let speedy = {
    __proto__: hamster,
    // stomach: [],
};

let lazy = {
    __proto__: hamster,
    // stomach: [],
};

speedy.eat("apple");
alert(speedy.stomach); // apple
alert(lazy.stomach); // apple