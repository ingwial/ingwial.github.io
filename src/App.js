import logo from './new_photo_profile_2025.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          I am a software engineer, developing computer software for 15 years. I am proactive, responsible and committed
          with my work.
        </p>
        <a
            className="App-link"
            href="https://www.linkedin.com/in/wilfredo-%C3%A1-a135a01b"
            target="_blank"
            rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
            className="App-link"
            href="https://github.com/ingwial"
            target="_blank"
            rel="noopener noreferrer"
        >
          Github
        </a>
        <a
            className="App-link"
            href="https://www.instagram.com/ingwial"
            target="_blank"
            rel="noopener noreferrer"
        >
          Instagram
        </a>
      </header>
    </div>
  );
}

export default App;
