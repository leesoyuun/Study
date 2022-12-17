import React from 'react';
import './sign_up.css';
import { Link } from "react-router-dom";

function Sign_up(){
  console.log('test')
  return(
      <div className='sign_up'>
        <div className='ID_Check'>
          <input placeholder='ID'/>
          <button>중복확인</button>
        </div>
        <input
            type='password'
            placeholder='비밀번호를 입력해주세요'/>
        <input
            type='password'
            placeholder='비밀번호 확인'/>
        <div>
          <input placeholder='이메일'/>
          <select>
            <option>naver.com</option>
            <option>daum.net</option>
            <option>gmail.com</option>
          </select>
        </div>
        <Link to={'/login'}>
          <button>회원가입</button>
        </Link>
      </div>
  );

}

export default Sign_up;