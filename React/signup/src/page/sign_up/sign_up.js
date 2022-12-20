function Sign_up_test(){
  const IdVal = document.getElementById('Sign_id').value;
  const PwdVal = document.getElementById('Sign_pwd').value;
  const RepwdVal = document.getElementById('Sign_repwd').value;
  const EmailVal = document.getElementById('Sign_email').value;

  let regExp = /[ \{\}\[\]\/?.,;:|\)*~`!\-_+┼<>@\#$%&\'\"\\\(\=]/gi;

  checklength(IdVal,PwdVal,EmailVal);
  checkregExp(IdVal,regExp);
}

function checklength(IdVal,PwdVal,EmailVal){
  if(IdVal.length == 0 && IdVal.length >= 10){
    ErrorMessage('ID를 확인해주세요.');
    return;
  }
  if(PwdVal.length = 0 && PwdVal.length >= 15){
    ErrorMessage('Pwd를 확인해 주세요');
    return;
  }
  if(EmailVal.length = 0){
    ErrorMessage('이메일을 입력해주세요.');
    return;
  }
}

function checkregExp(IdVal,regExp){
  if(IdVal.match(regExp) == null){
    ErrorMessage('Id를 확인해 주세요.');
    return;
  }
}
function ErrorMessage(message){
  alert(message);
}

export default Sign_up_test