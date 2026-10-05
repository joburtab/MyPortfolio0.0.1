import React, { useEffect, useState } from "react";
import "./RecentRepos.scss";

const GITHUB_API_BASE = "https://api.github.com";

async function fetchRecentRepositories() {
  const response = await fetch(
    `${GITHUB_API_BASE}/users/joburtab/repos?per_page=100&sort=pushed&type=owner`,
    { headers: { Accept: "application/vnd.github+json" } }
  );

  if (!response.ok) {
    throw new Error(`GitHub API responded with ${response.status}`);
  }

  const repositories = await response.json();

  return repositories.map((repository) => ({
    html_url: repository.html_url,
    name: repository.name,
    description: repository.description,
    language: repository.language,
    pushed_at: repository.pushed_at,
  }));
}

export default function RecentRepos() {
  const [repositories, setRepositories] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let isMounted = true;

    fetchRecentRepositories()
      .then((repos) => {
        if (isMounted) {
          setRepositories(repos);
          setStatus("success");
        }
      })
      .catch(() => {
        if (isMounted) {
          setStatus("error");
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="recent-repos" id="recent-repos">
      <div className="recent-repos-heading">
        <h2>Recent Repositories</h2>
        <p>Latest repos pushed by the current user.</p>
      </div>

      {status === "loading" && (
        <div className="recent-repos-load">Loading repositories...</div>
      )}

      {status === "success" && repositories.length === 0 && (
        <div className="recent-repos-empty">No repositories found.</div>
      )}

      {status === "success" && (
        <div className="recent-repos-list">
          {repositories.map((repository) => (
            <a
              key={repository.html_url}
              className="recent-repo-item"
              href={repository.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="recent-repo-name">{repository.name}</div>
              <div className="recent-repo-desc">
                {repository.description || "No description provided."}
              </div>
              <div className="recent-repo-meta">
                <span>{repository.language || "Unknown"}</span>
                <span>{repository.pushed_at}</span>
              </div>
            </a>
          ))}
        </div>
      )}

      {status === "error" && (
        <div className="recent-repos-error">
          Failed to load repositories. Please try again later.
        </div>
      )}
    </div>
  );
}
