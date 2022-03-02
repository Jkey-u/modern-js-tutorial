// [조건 처리(if, '?')] https://ko.javascript.info/ifelse

// Q1) 실행여부 - if와 문자열 0 ----------
if ("0") {
    alert( 'Hello' ); // "0"은 비어있지 않은 문자열이다. true를 반환 --> 실행
}


// Q2) 자바스크립트의 공식 이름 ----------
let answer = prompt('자바스크립트의 "공식" 이름은 무엇일까요?', '');

if(answer === 'ECMAScript') {
    console.log('정답입니다!');
} else {
    console.log('틀렸습니다. 정답은 ECMAScript입니다!');
}


// Q3) 입력받은 숫자의 부호 표시하기 ----------
let value = prompt('숫자를 입력하세요.', 0);

if (value > 0) {
    console.log( 1 );
} else if (value < 0) {
    console.log( -1 );
} else {
    console.log( 0 );
}


// Q4) 'if'를 '?'로 교체하기 ----------
let result;

if (a + b < 4) {
  result = '미만';
} else {
  result = '이상';
}

result = (a + b < 4) ? '미만' : '이상'; 


// Q5) 'if..else'를 '?'로 교체하기 ----------
let message;

if (login == '직원') {
  message = '안녕하세요.';
} else if (login == '임원') {
  message = '환영합니다.';
} else if (login == '') {
  message = '로그인이 필요합니다.';
} else {
  message = '';
}

message = (login == '직원') ? "안녕하세요" : 
            (login == '임원') ? "환영합니다." :
             (login == '') ? '로그인이 필요합니다' : '';