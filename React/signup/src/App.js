import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sign_up_form from "./page/sign_up/sign_up_form";
import Log_in_form from "./page/login/login_form";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sign_up_form/>}/>
          <Route path='/login' element={<Log_in_form/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
