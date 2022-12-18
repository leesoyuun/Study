import React from 'react';
import './sign_up.css';
import Sign_up_test from './sign_up'
import { Link } from "react-router-dom";

function Sign_up_form(){
  return(
      <div className='sign_up'>
        <div className='ID_Check'>
          <input
              id='Sign_id'
              placeholder='ID'/>
          <button>중복확인</button>
        </div>
        <input
            id='Sign_pwd'
            type='password'
            placeholder='비밀번호를 입력해주세요'/>
        <input
            id='Sign_repwd'
            type='password'
            placeholder='비밀번호 확인'/>
        <div>
          <input
              id='Sign_email'
              placeholder='이메일'/>
          <select>
            <option>naver.com</option>
            <option>daum.net</option>
            <option>gmail.com</option>
          </select>
        </div>
        <Link to={'/login'}>
          <button onClick={Sign_up_test}>회원가입</button>
        </Link>
      </div>
  );

}

export default Sign_up_form;