function Sign_up_test(){
  let id_val = document.getElementById('Sign_id').value;
  let pwd_val = document.getElementById('Sign_pwd').value;
  let repwd_val = document.getElementById('Sign_repwd').value;
  let email_val = document.getElementById('Sign_email').value;
  let regExp = /[ \{\}\[\]\/?.,;:|\)*~`!\-_+┼<>@\#$%&\'\"\\\(\=]/gi;

  if(id_val != '' && id_val.length >= 10 && id_val.match(regExp) == null){
    if(pwd_val != '' && pwd_val.length <15){
      if(pwd_val == repwd_val){
        if(email_val != ''){
          alert('회원가입이 완료되었습니다.');
        }
      }
    }
  }
}
export default Sign_up_test