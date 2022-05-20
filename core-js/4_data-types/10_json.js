// [json] https://ko.javascript.info/json
/*
    1. JSON 특징
        - 일반 객체, 배열, 문자열, 숫자, 불린값, null을 지원
        - 문자열은 큰따옴표로 감싼다 (JSON에선 작은따옴표나 백틱을 사용할 수 없다)
        - 객체 프로퍼티 이름은 큰따옴표로 감싼다
        - JSON은 주석을 지원하지 않는다

    2. JSON 메서드
        - JSON.stringify : 객체 --> JSON (인코딩)
        - JSON.parse : JSON --> 객체 (디코딩)
*/

// Q1) 객체를 JSON으로 바꾼 후 다시 객체로 바꾸기 ----------
let user = {
    name: "John Smith",
    age: 35,
};
let user2 = JSON.parse(JSON.stringify(user));
  

// Q2) 역참조 배제하기 ----------
let room = {
    number: 23,
};

let meetup = {
    title: "Conference",
    occupiedBy: [{ name: "John" }, { name: "Alice" }],
    place: room,
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert(
JSON.stringify(meetup, function replacer(key, value) {
    return key != "" && value == meetup ? undefined : value;
})
);

/*
{
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
}
*/