function Log_in_test() {
  const loginId = document.getElementById('User_Id').value;
  const loginPw = document.getElementById('User_pwd').value;

  const regExp = /[ \{\}\[\]\/?.,;:|\)*~`!\-_+┼<>@\#$%&\'\"\\\(\=]/gi;

  Validation(loginId,loginPw,regExp);
  regExpValidation(loginId,loginPw,regExp);
  login_axios(loginId,loginPw);
}

function Validation(loginId,loginPw){
  if(loginId.length >= 10){
    printError('아이디를 확인해주세요.');
    return;
  }
  if(loginPw.length < 15){
    printError("비밀번호를 확인해주세요.");
  }
  if(loginPw.length == 0){
    printError("비밀번호를 입력해주세요.");
    return;
  }
}

function regExpValidation(loginId,loginPw,regExp){
  if(loginId.match(regExp)!=null){
    printError("아이디에 특수문자가 포함되어있습니다.");
    return;
  }
  if(loginPw.match(regExp)!=null){
    printError("비밀번호에 특수문자가 포함되어있습니다.");
    return;
  }
}

function printError(message){
  alert(message);
  return;
}


export default Log_in_test