// [arrow-functions-basics] https://ko.javascript.info/arrow-functions-basics
/*
    - [(…args) => expression] : 화살표 함수는 '=>' 왼쪽에 있는 인수(args)를 이용해 '=>' 오른쪽에 있는 표현식(expression)을 평가한다
    - 본문이 여러 줄로 구성되었다면 중괄호를 사용 (이 경우는 반드시 return 지시자를 사용해 반환 값을 명기)
*/

// Q1) 화살표 함수로 변경하기 ----------
// basic function
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "동의하십니까?",
    function () {
        alert("동의하셨습니다.");
    },
    function () {
        alert("취소 버튼을 누르셨습니다.");
    }
);

// arrow function
let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
};

ask(
    "동의하십니까?",
    () => alert("동의하셨습니다."),
    () => alert("취소 버튼을 누르셨습니다.")
);