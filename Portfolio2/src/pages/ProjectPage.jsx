import React, { useEffect, useState } from 'react';

export default function ProjectsPage() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Arsalan0786/repos')
      .then(response => response.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      <h2 className="text-3xl font-bold mb-6">My GitHub Projects 🚀</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map(repo => (
          <div key={repo.id} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-all">
            <h3 className="text-xl font-semibold">{repo.name}</h3>
            <p className="text-sm text-gray-400">{repo.description}</p>
            <a 
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-yellow-400 mt-2 inline-block hover:text-yellow-300 transition-all"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
