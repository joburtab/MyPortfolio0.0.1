import React from "react";
import "./RecentRepos.scss";

export default function RecentRepos() {
  return (
    <div className="recent-repos" id="recent-repos">
      <div className="recent-repos-heading">
        <h2>Recent Repositories</h2>
        <p>Latest repos pushed by the current user.</p>
      </div>
      <div className="recent-repos-list">
        <a
          className="recent-repo-item"
          href="https://github.com/joburtab/MyPortfolio0.0.1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="recent-repo-name">MyPortfolio0.0.1</div>
          <div className="recent-repo-desc">Authored the DeveloperFolio portfolio.</div>
          <div className="recent-repo-meta">
            <span>JavaScript</span>
            <span>2026-09-23</span>
          </div>
        </a>
        <a
          className="recent-repo-item"
          href="https://github.com/joburtab/resume-job-MATCHER_Builder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="recent-repo-name">resume-job-MATCHER_Builder</div>
          <div className="recent-repo-desc">AI-powered resume builder.</div>
          <div className="recent-repo-meta">
            <span>Python</span>
            <span>2026-07-15</span>
          </div>
        </a>
        <a
          className="recent-repo-item"
          href="https://github.com/joburtab/odin-recipes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="recent-repo-name">odin-recipes</div>
          <div className="recent-repo-desc">Practical recipe app.</div>
          <div className="recent-repo-meta">
            <span>HTML</span>
            <span>2026-06-13</span>
          </div>
        </a>
        <a
          className="recent-repo-item"
          href="https://github.com/joburtab/javascript"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="recent-repo-name">javascript</div>
          <div className="recent-repo-desc">JavaScript fundamentals.</div>
          <div className="recent-repo-meta">
            <span>JavaScript</span>
            <span>2026-01-14</span>
          </div>
        </a>
        <a
          className="recent-repo-item"
          href="https://github.com/joburtab/CodvedaProjects-To-Do-List-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="recent-repo-name">CodvedaProjects-To-Do-List-app</div>
          <div className="recent-repo-desc">To-Do list application.</div>
          <div className="recent-repo-meta">
            <span>JavaScript</span>
            <span>2025-12-29</span>
          </div>
        </a>
        <a
          className="recent-repo-item"
          href="https://github.com/joburtab/ResponsiveLayout_Task1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="recent-repo-name">ResponsiveLayout_Task1</div>
          <div className="recent-repo-desc">Responsive layout practice.</div>
          <div className="recent-repo-meta">
            <span>HTML</span>
            <span>2025-12-29</span>
          </div>
        </a>
      </div>
    </div>
  );
}
