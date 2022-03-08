// [function-expressions] https://ko.javascript.info/function-expressions
/* 
    - 함수는 값이기 때문에 할당, 복사, 선언할 수 있다
    - [함수 선언문]
        - 함수를 생성하면, 함수가 독립된 구문 형태로 존재하게 된다
        - 코드 블록이 실행되기도 전에 처리되기 때문에, 블록 내 어디서든 활용 가능하다
    - [함수 표현식] 
        - 함수를 생성하면, 함수가 표현식의 일부로 존재하게 된다
        - 실행 흐름이 표현식에 다다랐을 때 만들어진다
*/

// 실무에서 유용하게 사용되는 콜백함수 활용 ----------
// 콜백 함수 : 함수를 함수의 인수로 전달하고, 필요하다면 인수로 전달한 그 함수를 "나중에 호출(called back)"하는 것
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("동의하셨습니다.");
}

function showCancel() {
  alert("취소 버튼을 누르셨습니다.");
}

ask("동의하십니까?", showOk, showCancel);