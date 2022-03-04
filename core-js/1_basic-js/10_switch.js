//[switch] https://ko.javascript.info/switch
/*
    case문 안에 break문이 없으면 조건에 부합하는지 여부를 따지지 않고 이어지는 case문을 실행한다
    switch문은 비교하려는 값과 case문의 값의 형과 값이 같아야 해당 case문이 실행된다
*/

// Q1) switch문을 if문으로 변환 ----------
//before
switch (browser) {
    case "Edge":
      alert("Edge를 사용하고 계시네요!");
      break;
  
    case "Chrome":
    case "Firefox":
    case "Safari":
    case "Opera":
      alert("저희 서비스가 지원하는 브라우저를 사용하고 계시네요.");
      break;
  
    default:
      alert("현재 페이지가 괜찮아 보이길 바랍니다!");
  }
  //aftera
  if (browser === "Edge") {
    alert("Edge를 사용하고 계시네요!");
  } else if (
    browser === "Chrome" ||
    browser === "Firefox" ||
    browser === "Safari" ||
    browser === "Opera"
  ) {
    alert("저희 서비스가 지원하는 브라우저를 사용하고 계시네요.");
  } else {
    alert("현재 페이지가 괜찮아 보이길 바랍니다!");
  }
  
  
  // Q2) if문을 switch문으로 변환 ----------
  //before
  let a = +prompt("a?", "");
  
  if (a == 0) {
    alert(0);
  }
  if (a == 1) {
    alert(1);
  }
  
  if (a == 2 || a == 3) {
    alert("2,3");
  }
  //after
  let a = +prompt("a?", "");
  switch (a) {
    case 0:
      alert(0);
      break;
  
    case 1:
      alert(1);
      break;
  
    case 2:
    case 3:
      alert("2,3");
      break;
  }