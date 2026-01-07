import { useEffect, useState } from "react";
import "./Projects.css";


function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/LenaaSun/repos")
      .then(res => res.json())
      .then(data => {
        const filtered = data
          .filter(repo => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        setRepos(filtered);
      });
  }, []);

  return (
  <div className="projects">
    <h1>Projects </h1>


      <div className="project-grid">
        {repos.map(repo => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="project-card"
          >
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description provided."}</p>

            <div className="project-meta">
              {repo.language && <span>{repo.language}</span>}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;

