import { useState } from "react";
import GithubUser from "./GitHubUser";

export default function GithubUsers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error("Errore nella ricerca degli utenti.");
      }
      const data = await response.json();
      setUsers(data.items);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Inserisci il nome utente GitHub"
        />
        <button type="submit">Cerca</button>
      </form>
      {loading && <div>Caricamento...</div>}
      {error && <div>{error}</div>}
      <div>
        {users.map((user) => (
          <GithubUser key={user.id} username={user.login} />
        ))}
      </div>
    </div>
  );
}
