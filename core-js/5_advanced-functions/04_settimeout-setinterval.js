// [settimeout-setinterval] https://ko.javascript.info/settimeout-setinterval
/*
    호출 스케줄링(scheduling a call)
        - 일정 시간이 지난 후에 원하는 함수를 예약 실행(호출)할 수 있게 하는 것
        - setTimeout
            - 일정 시간이 지난 후에 함수를 실행 (단 한번)
            - setTimeout(function, [delay], [arg1], [arg2], ...)
            - 스케줄링 취소하려면 clearTimeout()을 사용
            - setTimeout을 호출하고 반환받은 값을 clearTimeout에 넘겨주면 스케줄링을 취소할 수 있다
        - setInterval
            - 일정 시간 간격을 두고 함수를 실행
            - setInterval(function, [delay], [arg1], [arg2], ...)
            - setInterval을 호출하고 반환받은 값을 clearInterval에 넘겨주면 스케줄링을 취소할 수 있다
        - 중첩 setTimeout을 사용하면, setInterval을 사용한 것보다 유연하게 코드를 작성할 수 있다 
            - 지연 간격 보장
*/

// Q1) 일초 간격으로 숫자 출력하기
// setInterval
const printNumbers = (from, to) => {
    let current = from;

    let timerId = setInterval(function () {
        alert(current);
        if (current === to) clearInterval(timerId);
        current++;
    }, 1000);
};

// setTimeout
const printNumbers2 = (from, to) => {
    let current = from;

    setTimeout(function go() {
        alert(current);
        if (current < to) setTimeout(go, 1000);
        current++;
    }, 1000);
};

printNumbers(5, 10);
printNumbers2(5, 10);


// Q2) setTimeout 은 무엇을 보여줄까?
// setTimeout은 현재 실행 중인 코드의 실행이 종료되었을 때 실행된다
let i = 0;
setTimeout(() => alert(i), 100); // 100000000 출력

// 아래 반복문을 다 도는 데 100ms 이상의 시간이 걸린다고 가정
for (let j = 0; j < 100000000; j++) {
    i++;
}