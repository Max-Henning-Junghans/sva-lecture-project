import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [posts, setPosts] = useState("Test1");

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/v1/helloworld')
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]["Hello World"]);
        setPosts(data[0]["Hello World"]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
          {posts}
        </a>
      </header>
    </div>
  );
}

export default App;
