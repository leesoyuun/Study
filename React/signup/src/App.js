import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sign_up from "./page/sign_up/sign_up";
import Log_in from "./page/login/login_form";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sign_up/>}/>
          <Route path='/login' element={<Log_in/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
