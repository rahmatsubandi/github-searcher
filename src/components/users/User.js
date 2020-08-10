import React, { useEffect, useContext } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import GithubContext from "../../context/github/githubContext";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  //life cycle method untuk fetch data user dan repos
  useEffect(() => {
    githubContext.getUser(match.params.login);
    githubContext.getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    blog,
  } = githubContext.user;
  if (githubContext.loading) {
    return <LinearProgress color="primary" />;
  }
  return (
    <div className="container">
      <a component={Link} href="/users" className="btn btn-light mb-3">
        Back to search
      </a>
      <div className="card">
        <div className="row">
          <div className="col">
            <div className="pt-3" style={{ width: "50%", margin: "auto" }}>
              <img
                src={avatar_url}
                alt="avatar_image"
                className="img-thumbnail rounded-circle"
              />
            </div>
            <div className="mb-3" style={{ textAlign: "center" }}>
              {location} <br />
              <a href={blog}>{blog}</a>
            </div>
          </div>
          <div className="col">
            <div className="card-body">
              <h2>{name}</h2>
              <h4 className="font-weight-light">{login}</h4>
              <p>Hireable: {hireable ? "yes" : "no"}</p>
              {bio && <p>{bio}</p>}
            </div>
            <div className="card-body">
              <a href={html_url} target="_blank">
                <button className="btn btn-outline-info">
                  Visit Github Profile
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div className="row justify-content-center align-items-center">
          <div className="text-center col-xs-6 col-sm-3">
            Followers: {followers}
          </div>
          <div className="text-center col-xs-6 col-sm-3">
            Following: {following}
          </div>
          <div className="text-center col-xs-6 col-sm-3">
            Public repos: {public_repos}
          </div>
          <div className="text-center col-xs-6 col-sm-3">
            Public Gist: {public_gists}
          </div>
        </div>
      </div>
      <hr />
      <h3>Latest Repository</h3>
      {githubContext.repos.length > 0 && <Repos repos={githubContext.repos} />}
    </div>
  );
};

export default User;
