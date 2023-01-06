import logo from './logo.svg';
import './App.css';
// import Header from "./MyComponents/Header";
// import Footer from "./MyComponents/Footer";
// import { Todos } from "./MyComponents/Todos";

function App() {
  return (
    <>
    <p>{2/3}</p>
    <div className="App">
      <header className="App-header">
        <div>
          <p>Welcome to React App</p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go To React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
