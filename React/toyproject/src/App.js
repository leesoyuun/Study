import logo from './logo.svg';
import './App.css';

function App(props) {
  let name = "React"
  return (
    <div className="App">
      <h1>Hello, {name}</h1>
      <h2>현재시간은 : {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;
