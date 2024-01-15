import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          Learn React
        </a>
      </header>
    </div>
  );
}


function Welcome() {
  return (
    <div className="welcome">
      <h1>Welcome Madam Runor Jefia!</h1>
      <p> I have heard what you said, I will never default.</p>
    </div>
  );
}

export default Welcome;