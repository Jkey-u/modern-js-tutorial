// [prototype-methods] https://ko.javascript.info/prototype-methods

/*
     프로토타입을 설정하기 위한 모던한 방법
        - Object.create(proto, [descriptors]) – [[Prototype]]이 proto인 객체를 만든다 
        - Object.getPrototypeOf(obj) – obj의 [[Prototype]]을 반환(__proto__ getter와 같다)
        - Object.setPrototypeOf(obj, proto) – obj의 [[Prototype]]을 proto로 설정(__proto__ setter와 같다)
*/

// Q1) 사전에 toString 추가하기 ----------
let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join();
        },
    },
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for (let key in dictionary) {
    alert(key);
}

alert(dictionary); // "apple,__proto__"


// Q2) 호출 간의 차이점 ----------
function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype.sayHi = function () {
    alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // Rabbit (this: rabbit)
Rabbit.prototype.sayHi(); // undefined (this: Rabbit.portotype)
Object.getPrototypeOf(rabbit).sayHi(); // undefined (this: Rabbit.portotype)
rabbit.__proto__.sayHi(); // undefined (this: Rabbit.portotype)