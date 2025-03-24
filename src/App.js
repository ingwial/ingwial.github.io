import Logo from "./logo.png";
import "./App.css";
import GithubIcon from "./github-logo.png";
import LinkedinIcon from "./linkedin-logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <p>
          I am a software engineer, developing computer software for 15 years. I
          am proactive, responsible and committed with my work.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <img src={LinkedinIcon} alt="LinkedinIcon" height={24} />
              </td>
              <td>
                <a
                  className="App-link"
                  href="https://www.linkedin.com/in/wilfredo-%C3%A1-a135a01b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <img src={GithubIcon} alt="GithubIcon" height={24} />
              </td>
              <td>
                <a
                  className="App-link"
                  href="https://github.com/ingwial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
