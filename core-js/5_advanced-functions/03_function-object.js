// [function-object] https://ko.javascript.info/function-object
/*
    함수 객체
        - 함수는 호출이 가능한(callable) '행동 객체’
        - 내장 프로퍼티
            - .name : 함수의 이름
            - .length : 함수 매개변수의 개수를 반환 (단, 나머지 매개변수는 개수에 포함되지 않는다)
            - 커스텀 프로퍼티 : 함수에 자체적으로 만든 프로퍼티를 추가
        - 기명 함수 표현식
            - 이름이 있는 함수 표현식 (Named Function Expression, NFE)
            - 이름을 사용해 함수 표현식 내부에서 자기 자신을 참조할 수 있다(재귀호출)
            - 기명 함수 표현식 외부에선 접근 불가
*/

// Q1) 숫자 설정과 감소가 가능한 counter
function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = (value) => {
        counter = value;
    };
    counter.decrease = () => {
        counter—;
    };

    return counter;
}


// Q2) 임의의 수만큼 있는 괄호를 이용해 합계 구하기
function sum(a) {
    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function () {
        return currentSum;
    };

    return f; //함수 f를 반환
}
sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3