// [bind] https://ko.javascript.info/bind

/*
    bind
        - 보통 객체 메서드의 this를 고정해 어딘가에 넘기고자 할 때 사용 (setTimeout에 넘길 때)
        - func.bind(context, ...args)
            - this가 context로 고정되고 인수도 고정된 함수 func을 반환
*/

// Q1) bind를 적용한 함수를 메서드에 정의하기 ----------
function f() {
    alert(this);
}

let user = {
    g: f.bind(null),
};

user.g(); // ? : null


// Q2) bind 두 번 적용이 가능할까? ----------
// 한번 bind를 적용하면 bind를 사용해 컨텍스트를 다시 정의할 수 없다 (함수 생성 시점의 컨텍스트만 기억)
function f() {
    alert(this.name);
}

f = f.bind({
    name: "John"
}).bind({
    name: "Ann"
});

f(); //John


// Q3) bind를 적용한 함수의 프로퍼티 ----------
function sayHi() {
    alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "John",
});

alert(bound.test); // undefined : bind를 적용하면 또 다른 객체가 반환된다 (새로운 객체엔 test 프로퍼티가 없다)


// Q4) this 값이 undefined인 함수 고치기 ----------
// 에러는 함수 loginOk, loginFail을 객체 없이 가지고 오기 때문에 발생
function askPassword(ok, fail) {
    let password = prompt("비밀번호를 입력해주세요.", "");
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: "John",

    loginOk() {
        alert(`${this.name}님이 로그인하였습니다.`);
    },

    loginFail() {
        alert(`${this.name}님이 로그인에 실패하였습니다.`);
    },
};

// askPassword(user.loginOk, user.loginFail);
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


// Q5) 로그인에 부분 적용하기 ----------
// 컨텍스트가 user이면서 올바른 첫 번째 인수가 있는 부분 적용 함수를 만들면 원하는 기능을 구현할 수 있다
function askPassword(ok, fail) {
    let password = prompt("비밀번호를 입력해주세요.", "");
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: "John",

    login(result) {
        alert(this.name + (result ? " 로그인 성공" : " 로그인 실패"));
    },
};

// askPassword(?, ?);
// askPassword(() => user.login(true), () => user.login(false));
askPassword(user.login.bind(user, true), user.login.bind(user, false));