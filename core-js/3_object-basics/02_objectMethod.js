// [object-methods] https://ko.javascript.info/object-methods

// Q1) 객체 리터럴에서 'this' 사용하기 ----------
function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        },
    };
}
let user = makeUser();
alert(user.ref().name);


// Q2) 계산기 만들기 ----------
let calculator = {
    read() {
        this.a = +prompt("첫 번째 값:", 0);
        this.b = +prompt("두 번째 값:", 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());


// Q3) 체이닝 ----------
// 메서드를 호출할 때마다 객체 자신을 반환하게 하면, 메서드 호출 체이닝이 가능하다
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    },
};

ladder.up().up().down().up().down().showStep(); // 1