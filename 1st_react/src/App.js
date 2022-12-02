import logo from './logo.svg';
import './App.css';
import React,{useState} from "react"

function App() {
   function showO (){
  setCircle("X")
} 
function showX() {
  setCircle("O")
}
  const [circle, setCircle]=useState(5)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button title = "O" onClick={(circle==="X")? (showX) : showO}>
          {(circle)}</button>
      </header>
    </div>
  );
} 
export default App;
