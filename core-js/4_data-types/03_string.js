// [string] https://ko.javascript.info/string
/*
    - 대괄호 [] : 문자열 내의 글자 하나를 얻기
    - slice() / substring() : 부분 문자열을 얻기
    - toLowerCase() / toUpperCase() : 소/대 문자로 바꾸기
    - indexOf() : 부분 문자열의 위치
    - includes() / startsWith(), endsWith() : 부분 문자열 여부(true/false)
    - trim() : 문자열 앞과 끝의 공백 문자 제거
    - repeat(n) : 문자열을 n번 반복
*/

// Q1) 첫 글자를 대문자로 변경하기 ----------
const ucFirst = (name) => {
  if (!name) return name;
  return name[0].toUpperCase() + str.slice(1);
};

ucFirst("john"); //John


// Q2) 스팸 문자열 걸러내기 ----------
// str에 'viagra’나 'XXX’라는 문자열이 있으면 true를 반환해주는 함수
const checkSpam = (str) => {
  let lowerStr = str.toLowerCase();
  return str.includes("viagra") || str.includes("xxx");
};

alert(checkSpam("buy ViAgRA now"));
alert(checkSpam("free xxxxx"));
alert(checkSpam("innocent rabbit"));


// Q3) 문자열 줄이기 ----------
// str의 길이가 최대 길이 maxlength를 초과하는 경우, str의 끝을 생략 부호 ("…")로 대체해주는 함수
const truncate = (str, maxlength) => {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "..." : str;
};


// Q4) 문자열에서 숫자만 추출하기 ----------
const extractCurrencyValue = (str) => {
  return +str.slice(1);
};