import React from "react";

const RepoItem = ({ repo }) => {
  return (
    <div className="container">
      <div className="card mb-2">
        <div className="card-body">
          <div className="col-auto">
            <a
              href={repo.html_url}
              className="btn btn-light"
              style={{ textDecoration: "underline" }}
            >
              {repo.name}
            </a>
            <p className="font-weight-light text-right mt-2 mb-2">
              {repo.description}
            </p>
            <p className="text-monospace">{repo.language}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RepoItem;
