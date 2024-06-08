import "./App.css";
import GithubUser from "./assets/components/GitHubUser";
import GithubUsers from "./assets/components/GithubUsers";

function App() {
  return (
    <div>
      <div>
        <GithubUser username="sxilisi" />
      </div>
      <div>
        <GithubUsers />
      </div>
    </div>
  );
}

export default App;
