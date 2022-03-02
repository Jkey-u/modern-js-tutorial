// [비교 연산자] https://ko.javascript.info/comparison

// Q) 비교 결과 예측
5 > 4 //true
"apple" > "pineapple" //false
"2" > "12" //true
undefined == null //true
undefined === null //false
null == "\n0\n" //false : null은 오직 undefined와 같다.
null === +"\n0\n" //false