import logo from './logo.svg';
import './App.css';
import Counter from './mini_components/functional'
import HelloComp from './mini_components/react_component';

const name = 'Vinodel'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>this is React.component</div>
        <HelloComp name={name} />
        <Counter />
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

export default App;
