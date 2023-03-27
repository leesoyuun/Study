import logo from './logo.svg';
import './App.css';

function getCookie() {
    const allCookies = document.cookie;

    if (allCookies != '')
        alert(`저장된 쿠키 값은 ${allCookies}입니다. \n 재방문을 환영합니다.`);
    else
        alert(`첫 방문을 환영합니다. 쿠키값 생성을 원하시면 1번을 클릭해 주세요.`)
}

function setCookie() {
    let expiration = new Date();
    expiration.setDate(expiration.getDate() + 10);
    expiration.toUTCString() // // 날짜를 쿠키로 저장하기 위해서 -> UTC 방식으로 표기 -> toUTCString() 메서드 사용.

    // 쿠키 생성하기
    let cookies = '';
    cookies = `userid=helloCookie; expires=${expiration.toUTCString()};`;
    console.log(cookies);

    // 쿠키 저장하기
    document.cookie = cookies;
    alert('쿠키를 생성하였습니다.');
}

function delCookies() {
    // document.cookie에 값을 대입하는 형태로 -> 쿠키 삭제(or 생성/수정)
    // 직접 삭제가 아니라 수정이라고 봐야함. 만료일을 정해놓은 쿠키를 과거의 날짜로 수정해서 쿠키를 수정하는 것 -> 수정이 즉 삭제의 의미
    // 쿠키 삭제는? 이미 한참 지나간 시간을 입력해버림으로써 쿠키를 삭제시킨다.
    document.cookie = 'userid=helloCookie; expires=Sat, 01 Jan 1972 00:00:00 GMT' // 쿠키삭제
    alert('쿠키를 삭제하였습니다.');
}

function App() {
    return (
        <div className="App">
            <h3>Cookie 생성과 확인 그리고 삭제</h3>
            <p className='text-blue pointer' onClick={setCookie}>1. Cookie 생성</p>
            <p className='text-blue pointer' onClick={getCookie}>2. Cookie 확인</p>
            <p className='text-blue pointer' onClick={delCookies}>3. Cookie 삭제</p>
        </div>
    );
}

export default App;
