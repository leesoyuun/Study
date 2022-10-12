import logo from './logo.svg';
import './App.css';

function App(props) {
  let name = "react"
  return (
    <div>
      <h1>Hi,{name}</h1>
      <h2>현재 시간,{new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;