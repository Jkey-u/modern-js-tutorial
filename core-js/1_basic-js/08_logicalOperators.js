// [논리 연산자] https://ko.javascript.info/logical-operators

// Q1) OR 연산의 결과 ----------
alert( null || 2 || undefined ); //2 : 피연산자 중 첫 번째 truthy


// Q2) OR 연산자의 피연산자가 alert 라면? ----------
alert( alert(1) || 2 || alert(3) ); //2


// Q3) AND 연산의 결과 ----------
alert( 1 && null && 2 ); //null : 피연산자 중 첫 번째 falsy


// Q4) AND 연산자의 피연산자가 alert 라면? ----------
alert( alert(1) && alert(2) ); // 1 → undefined : alert을 호출하면 undefined가 반환된다


// Q5) OR AND OR 연산자로 구성된 표현식의 결과 ----------
alert( null || 2 && 3 || 4 ); // 3


// Q6) 사이 범위 확인 - age(나이)가 14세 이상 90세 이하에 속하는지를 확인 ----------
if(age >= 14 && age <= 90) {}


// Q7) 바깥 범위 확인하기 - age(나이)가 14세 이상 90세 이하에 속하지 않는지를 확인 ----------
if(age < 14 || age > 90) {}
if(!(age >= 14 && age <= 90)) {}


// Q8) 결과 예측 ----------
if (-1 || 0) alert( 'first' ); //alert 실행
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' ); //alert 실행


// Q9) 로그인 간이 로직 구현 ----------
let userId = prompt('아이디 : ','');

if(userId === "Admin") {
    let userPwd = prompt('비밀번호 : ','');

    if(userPwd === 'TheMaster') {
        alert('환영합니다!');
    } else if(userPwd === '' || userPwd == null) { // 빈 문자열이나 입력 취소 
        alert('취소되었습니다.');
    } else {
        alert('인증에 실패하였습니다.');
    }

} else if(userId === '' || userId === null) {
    alert('취소되었습니다.');
    
} else {
    alert('인증되지 않은 사용자입니다.');
}