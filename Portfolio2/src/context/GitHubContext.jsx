import { createContext, useContext, useState } from 'react';
import { fetchRepositories } from '../api/githubAPI';

const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadRepositories = async () => {
    setLoading(true);
    try {
      const data = await fetchRepositories();
      setRepositories(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GitHubContext.Provider value={{ repositories, loading, error, loadRepositories }}>
      {children}
    </GitHubContext.Provider>
  );
};

export const useGitHub = () => useContext(GitHubContext); 