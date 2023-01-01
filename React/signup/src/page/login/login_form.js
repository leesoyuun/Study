import React from 'react'
import Log_in_test from './login'
import '../sign_up/sign_up.css'
import '../api/LoginApi'

function Log_in_form(){
  return(
      <div className='sign_up'>
        <div>
          <input
              id='User_Id'
              placeholder='user ID'/>
          <input
              id='User_pwd'
              type='password'
              placeholder='user password'/>
          <button onClick={Log_in_test}>로그인</button>
        </div>
        <button>아이디 찾기</button>
        <button>비밀번호 찾기</button>
      </div>
  )
}

export default Log_in_form;