function Log_in_test() {
  let login_val = document.getElementById('User_Id').value;
  let pwd_Val = document.getElementById('User_pwd').value;
  let regExp = /[ \{\}\[\]\/?.,;:|\)*~`!\-_+┼<>@\#$%&\'\"\\\(\=]/gi;
  if (login_val.length >= 10 && login_val.match(regExp) == null)  {
    if(pwd_Val.length < 15 && pwd_Val.length != 0){
      console.log('ok pwd')
    }
    else{
      console.log('Input your pwd')
    }
  }
  else{
    console.log('check your Id or pwd')
  }
}

export default Log_in_test